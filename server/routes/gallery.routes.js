import express from "express";
import GalleryController from "../controllers/gallery/galleryController.js";
import upload from "../middlewares/multerConfig.js";
const router = express.Router();


router.get("/",GalleryController.getGallery);
router.post("/", upload.array('file', 10) ,GalleryController.createGallery);
router.delete("/:id", GalleryController.deleteGallery);

export default router;
