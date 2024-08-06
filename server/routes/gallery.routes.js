import express from "express";
import GalleryController from "../controllers/gallery/galleryController.js";
import upload from "../middlewares/multerConfig.js";
const router = express.Router();


router.get("/",GalleryController.getGallrey);
router.post("/", upload.single("image") ,GalleryController.createGallery);
export default router;
