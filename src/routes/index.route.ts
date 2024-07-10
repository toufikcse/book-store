import express from 'express';
import authorV1 from './v1/author.route';
import bookV1 from './v1/book.route';

const router = express.Router();
router.use('/v1', authorV1);
router.use('/v1', bookV1);

export default router;
