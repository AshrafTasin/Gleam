import express, { Router } from 'express';
import { signIn, signUp,updatedUser } from '../controllers/users.js'
const router = express.Router();


router.post('/signin',signIn);
router.post('/signup',signUp);
router.put('/:id',updatedUser);

export default router;