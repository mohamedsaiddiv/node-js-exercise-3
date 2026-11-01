import express from 'express';

import { protect } from '../middlewares/auth.js';

import {
  authorize
} from '../middlewares/authorize.js';

const router = express.Router();

router.get(
  '/dashboard',
  protect,
  authorize('admin'),
  (req, res) => {
    res.status(200).json({
      message: `Welcome to the admin dashboard, ${req.user.name}`,
      role: req.user.role
    });
  }
);

export default router;