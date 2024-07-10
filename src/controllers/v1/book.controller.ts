import { Request, Response, NextFunction } from 'express';
import HttpStatus from '@common/http-status';
import { success } from '@common/common-response';
import Messages from '@common/messages';
import bookServices from '@src/services/book.service';

class BookController {
  async createBook(req: Request, res: Response, next: NextFunction) {
    try {
      const create = await bookServices.createBook(req.body);

      return res
        .status(HttpStatus.OK)
        .send(success(Messages.AuthorCreated, create));
    } catch (error) {
      console.log('error', error);
      return next(error);
    }
  }

  async updateBook(req: Request, res: Response, next: NextFunction) {
    try {
      const update = await bookServices.updateBook(req.body, req.params.id);

      return res
        .status(HttpStatus.OK)
        .send(success(Messages.BookUpdated, update));
    } catch (error) {
      return next(error);
    }
  }

  async findBook(req: Request, res: Response, next: NextFunction) {
    try {
      const find = await bookServices.findBook(req.params.id);

      return res
        .status(HttpStatus.OK)
        .send(success(Messages.FetchBookById, find));
    } catch (error) {
      return next(error);
    }
  }

  async getAllBooks(req: Request, res: Response, next: NextFunction) {
    try {
      const allBooks = await bookServices.getAllBooks();

      return res
        .status(HttpStatus.OK)
        .send(success(Messages.BookFetchList, allBooks));
    } catch (error) {
      return next(error);
    }
  }

  async deleteBook(req: Request, res: Response, next: NextFunction) {
    try {
      await bookServices.deleteBook(req.params.id);

      return res.status(HttpStatus.OK).send(success(Messages.BookDelete, {}));
    } catch (error) {
      return next(error);
    }
  }

  async getBooksByAuthor(req: Request, res: Response, next: NextFunction) {
    const authorId = req.params.id;
    try {
      const authorBookList = await bookServices.getBooksByAuthor(authorId);

      return res
        .status(HttpStatus.OK)
        .send(success(Messages.AuthorBookFetchList, authorBookList));
    } catch (error) {
      return next(error);
    }
  }
}

export default new BookController();
