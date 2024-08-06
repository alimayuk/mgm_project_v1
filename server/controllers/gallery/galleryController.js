import Gallery from "../../models/Gallery.js";

class GalleryController {
  static getGallrey = async (req, res) => {
    try {
      const gallery = await Gallery.find({});
      res.status(200).json(gallery);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  static createGallery = async (req, res) => {
    try {
      const { title, alt } = req.body;
      const file = req.file;
      const imagePath = "uploads/" + file.filename;
      // Use title as alt text if alt is not provided
      const altText = alt || title;
      // Create a new gallery entry
      const newGallery = new Gallery({
        title: title,
        path_name: imagePath,
        alt: altText,
      });
      // Save the gallery entry
      await newGallery.save();
      // Send response
      res.status(201).json(newGallery);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default GalleryController;
