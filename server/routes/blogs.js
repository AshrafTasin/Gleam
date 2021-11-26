import express, { Router } from 'express';
import { getBlogs, createBlogs } from '../controllers/blogs.js'
const router = express.Router();

router.get('/getBlog',getBlogs);
router.post('/createBlog',createBlogs);

export default router;