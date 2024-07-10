import authorValidator from '@middlewares/validation/author.validation';
import AuthorController from '@src/controllers/v1/author.controller';
import express from 'express';

const router = express.Router();

router.post(
  '/authors',
  authorValidator.createAuthor,
  AuthorController.createAuthor,
);

router.put(
  '/authors/:id',
  authorValidator.updateAuthor,
  AuthorController.updateAuthor,
);

router.get('/authors', AuthorController.getAllAuthors);

router.get('/authors/:id', AuthorController.findAuthor);

router.delete('/authors/:id', AuthorController.deleteAuthor);

router.get('/authors/:id/books', AuthorController.getBooksByAuthor);

export default router;
