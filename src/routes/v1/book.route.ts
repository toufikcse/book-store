import bookValidator from '@middlewares/validation/book.validation';
import BookController from '@src/controllers/v1/book.controller';
import express from 'express';

const router = express.Router();

router.post('/books', bookValidator.createBook, BookController.createBook);

router.put('/books/:id', bookValidator.updateBook, BookController.updateBook);

router.get('/books', BookController.getAllBooks);

router.get('/books/:id', BookController.findBook);

router.delete('/books/:id', BookController.deleteBook);

router.get('/books/author/:id', BookController.getBooksByAuthor);

export default router;
