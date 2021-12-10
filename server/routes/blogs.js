import express, { Router } from 'express';
import { getBlogs, createBlogs, getSingleBlog, blogImage, getBlogImage, deleteBlog, updateBlog } from '../controllers/blogs.js';
import ckimage from '../middleware/ckimage.js';

const router = express.Router();

router.post('/createBlog',createBlogs);

router.get('/getBlog',getBlogs);
router.post('/upload',ckimage,blogImage);

router.get('/images/:id',getBlogImage);
router.delete('/:id',deleteBlog);
router.put('/:id',updateBlog);
router.get('/:id',getSingleBlog);

export default router;