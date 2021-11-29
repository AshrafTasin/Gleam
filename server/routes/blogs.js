import express, { Router } from 'express';
import { getBlogs, createBlogs, getSingleBlog } from '../controllers/blogs.js'
const router = express.Router();

router.get('/getBlog',getBlogs);
router.get('/:id',getSingleBlog);
router.post('/createBlog',createBlogs);

export default router;