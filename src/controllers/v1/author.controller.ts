import { Request, Response, NextFunction } from 'express';
import HttpStatus from '@common/http-status';
import { success } from '@common/common-response';
import Messages from '@common/messages';
import authorServices from '@src/services/author.service';

class AuthorController {
  async createAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const create = await authorServices.createAuthor(req.body);

      return res
        .status(HttpStatus.OK)
        .send(success(Messages.AuthorCreated, create));
    } catch (error) {
      return next(error);
    }
  }

  async updateAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const update = await authorServices.updateAuthor(req.body, req.params.id);

      return res
        .status(HttpStatus.OK)
        .send(success(Messages.AuthorUpdated, update));
    } catch (error) {
      return next(error);
    }
  }

  async findAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      const find = await authorServices.findAuthor(req.params.id);

      return res
        .status(HttpStatus.OK)
        .send(success(Messages.FetchAuthorById, find));
    } catch (error) {
      return next(error);
    }
  }

  async getAllAuthors(req: Request, res: Response, next: NextFunction) {
    try {
      const allAuthors = await authorServices.getAllAuthors();

      return res
        .status(HttpStatus.OK)
        .send(success(Messages.AuthorFetchList, allAuthors));
    } catch (error) {
      return next(error);
    }
  }

  async deleteAuthor(req: Request, res: Response, next: NextFunction) {
    try {
      await authorServices.deleteAuthor(req.params.id);

      return res.status(HttpStatus.OK).send(success(Messages.AuthorDelete, {}));
    } catch (error) {
      return next(error);
    }
  }

  async getBooksByAuthor(req: Request, res: Response, next: NextFunction) {
    const authorId = req.params.id;
    try {
      const authorBookList = await authorServices.getBooksByAuthor(authorId);

      return res
        .status(HttpStatus.OK)
        .send(success(Messages.AuthorBookFetchList, authorBookList));
    } catch (error) {
      return next(error);
    }
  }
}

export default new AuthorController();
