import Gallery from "../../models/Gallery.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// ES modülleri ile __dirname elde etme
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class GalleryController {
  static getGallery = async (req, res) => {
    try {
      const gallery = await Gallery.find({});
      res.status(200).json(gallery);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static createGallery = async (req, res) => {
    try {
      const files = req.files;
      const { title, alt } = req.body;
  
      if (!files || files.length === 0) {
        return res.status(400).json({ error: "No files were uploaded." });
      }
  
      // Varsayılan değerleri kontrol et ve gerekiyorsa ata
      const defaultTitle = "Dişci Klinik Görseli";
      const defaultAlt = "Dişci Klinik Görseli";
  
      // Her dosya için title ve alt değerlerini belirle
      const galleryEntries = files.map((file) => ({
        path_name: "uploads/" + file.filename,
        title: title && title.trim() !== "" && title != "undefined" ? title : defaultTitle,
        alt: alt && alt.trim() !== "" && alt != "undefined" ? alt : defaultAlt,
      }));
  
      // Gallery koleksiyonuna dosya girişlerini ekleyin
      const newGalleryEntries = await Gallery.insertMany(galleryEntries);
      res.status(201).json(newGalleryEntries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  

  static deleteGallery = async (req, res) => {
    try {
      const { id } = req.params;

      // 1. Veritabanından görsel bilgilerini al
      const gallery = await Gallery.findById(id);

      if (!gallery) {
        return res.status(404).json({ error: "Gallery not found." });
      }

      // 2. Görselin dosya yolunu al
      const filePath = path.join(__dirname, "../../", gallery.path_name);

      // 3. Dosyayı sil
      fs.unlink(filePath, async (err) => {
        if (err) {
          console.error("Görsel silinirken hata oluştu:", err);
          return res.status(500).json({ error: "Error deleting image file." });
        }

        // 4. Görseli veritabanından sil
        const deletedGallery = await Gallery.findByIdAndDelete(id);

        if (!deletedGallery) {
          return res.status(404).json({ error: "Gallery not found." });
        }

        // 5. Başarıyla silindiğini belirt
        res.status(200).json(deletedGallery);
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default GalleryController;
