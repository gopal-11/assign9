// backend/routes/UserRoutes.js

import express from 'express';
import { getProducts } from '../controllers/ProductController.js';

const router = express.Router();

// get router to fetch products
router.get('/products', getProducts);

export default router;
