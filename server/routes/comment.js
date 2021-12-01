import express, { Router } from 'express';
import {createComment,getComments} from "../controllers/comment.js";
const router = express.Router();

router.post('/saveComment',createComment);
<<<<<<< HEAD
router.post('/getComments',getComments);
=======
router.get('/getComments',getComments);
>>>>>>> blog/disc !

export default router;