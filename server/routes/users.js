import express, { Router } from 'express';
import { passwordReset, signIn, signUp,updatedUser, verifyEmail } from '../controllers/users.js'
const router = express.Router();


router.post('/signin',signIn);
router.post('/signup',signUp);
router.put('/:id',updatedUser);
router.post('/verify-email',verifyEmail);
router.post('/reset-password',passwordReset);

export default router;