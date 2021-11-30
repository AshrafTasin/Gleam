import express, { Router } from 'express';
import { getBlogs, createBlogs, getSingleBlog, blogImage, getBlogImage, deleteBlog } from '../controllers/blogs.js';
import ckimage from '../middleware/ckimage.js';
const router = express.Router();

router.get('/getBlog',getBlogs);
router.get('/:id',getSingleBlog);
router.post('/createBlog',createBlogs);
router.post('/upload',ckimage,blogImage);
router.get('/images/:id',getBlogImage);
router.delete("/:id",deleteBlog);

export default router;