import express from "express";
import upload from "../middlewares/multerConfig.js";
import BlogController from "../controllers/blog/BlogController.js";
const router = express.Router();


router.get("/page",BlogController.getAllBlogs);
router.get("/",BlogController.getBlogsPagination);
router.get("/:slug", BlogController.getBlogBySlug)

router.post("/", upload.array('image', 1) ,BlogController.createBlog);
router.put("/:slug", upload.array('image', 1), BlogController.updateBlog)
router.delete("/:slug", BlogController.deleteBlog);

export default router;
