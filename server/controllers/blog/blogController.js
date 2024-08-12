import Blog from "../../models/Blog.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import upload from "../../middlewares/multerConfig.js";

// ES modülleri ile __dirname elde etme
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Slug oluşturma ve benzersizliğini sağlama
const generateUniqueSlug = async (title) => {
  // Slug oluşturma fonksiyonu
  const createSlug = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Özel karakterleri temizle
      .trim()
      .replace(/\s+/g, "-") // Boşlukları tire ile değiştir
      .substring(0, 100); // Slug uzunluğunu sınırla
  };

  let slug = createSlug(title);
  let uniqueSlug = slug;

  // Veritabanında mevcut olup olmadığını kontrol et
  const existingBlog = await Blog.findOne({ slug: uniqueSlug });

  while (existingBlog) {
    const randomSuffix = Math.random().toString(36).substring(2, 7); // Rastgele bir değer oluştur
    uniqueSlug = `${slug}-${randomSuffix}`;
    const checkSlug = await Blog.findOne({ slug: uniqueSlug });
    if (!checkSlug) break;
  }

  return uniqueSlug;
};

class BlogController {
  static async getAllBlogs(req, res) {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getBlogsPagination(req, res) {
    const limit = parseInt(req.query.limit) || 6;
    const skip = parseInt(req.query.skip) || 0;
    try {
      const posts = await Blog.find().limit(limit).skip(skip);
      const total = await Blog.countDocuments();

      res.status(200).json({
        posts: posts,
        total: total,
        skip: skip,
        limit: limit,
      });

    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async getBlogBySlug(req, res) {
    try {
      const blog = await Blog.findOne({ slug: req.params.slug });
      if (!blog) {
        return res.status(404).json({ message: "Blog bulunamadı" });
      }
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createBlog(req, res) {
    upload.array('image', 1)(req, res, async function (err) {
      if (err) {
        return res.status(400).json({ message: err.message });
      }
      
      try {
        const { title, content, active } = req.body;
        const image_path = req.files[0].path; // İlk yüklenen dosyanın yolunu al
        const slug = await generateUniqueSlug(title);
        
        const newBlog = new Blog({
          title,
          slug,
          image_path,
          content,
          active,
        });
  
        await newBlog.save();
        res.status(201).json(newBlog);
      } catch (error) {
        // Hata durumunda dosyayı sil
        if (req.files && req.files.length > 0) {
          fs.unlink(req.files[0].path, (err) => {
            if (err) console.error('Dosya silinemedi:', err);
          });
        }
        res.status(400).json({ message: error.message });
      }
    });
  }

  // Belirli bir blogu güncelleyen metod
  static async updateBlog(req, res) {
    try {
      const { title, content } = req.body;
      const { slug } = req.params;
      const blog = await Blog.findOne({ slug });

      if (!blog) {
        return res.status(404).json({ message: "Blog bulunamadı" });
      }

      // Yeni dosya varsa, mevcut dosyayı sil
      if (req.files && req.files.length > 0) {
        const newImagePath = req.files[0].path;
        if (blog.image_path) {
          fs.unlink(path.join(__dirname, "../../", blog.image_path), (err) => {
            if (err) console.error("Eski dosya silinirken hata oluştu:", err);
          });
        }
        blog.image_path = newImagePath;
      }
      // Slug'i güncelleme işlemi
      if (blog.title != title) {
        const newSlug = await generateUniqueSlug(title);
        blog.slug = newSlug;
      }
      // Blogu güncelle
      blog.title = title || blog.title;
      blog.content = content || blog.content;

      const updatedBlog = await blog.save();
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Belirli bir blogu silen metod
  static async deleteBlog(req, res) {
    try {
      const { slug } = req.params;
      const blog = await Blog.findOne({ slug });

      if (!blog) {
        return res.status(404).json({ message: "Blog bulunamadı" });
      }

      // Fotoğraf dosyasını sil
      if (blog.image_path) {
        const imagePath = path.join(__dirname, "../../", blog.image_path);
        fs.unlink(imagePath, (err) => {
          if (err) console.error("Dosya silinirken hata oluştu:", err);
        });
      }

      // Blogu veritabanından sil
      await Blog.deleteOne({ slug });
      res.status(200).json({ message: "Blog başarıyla silindi" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default BlogController;
