import express, { Router } from 'express';
import { getDisc, createDiscs } from '../controllers/discussions.js'
const router = express.Router();

router.get('/getDisc',getDisc);
router.post('/createDisc',createDiscs);

export default router;