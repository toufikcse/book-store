import NotFoundError from '@common/errors/http404Error';
import Messages from '@common/messages';
import AuthorRepository from '@src/repositories/author.repository';
import { IAuthor } from '@src/types/author.interface';

export class AuthorService {
  async createAuthor(data: IAuthor) {
    const createAuthor = await AuthorRepository.createAuthor(data);
    return createAuthor;
  }

  async updateAuthor(data: Partial<IAuthor>, id: string) {
    const author = await AuthorRepository.findAuthor(id);
    if (!author) {
      throw new NotFoundError(Messages.AuthorNotFound);
    }

    const updateAuthor = await AuthorRepository.updateAuthor(id, data);
    return updateAuthor;
  }

  async findAuthor(id: string) {
    const find = await AuthorRepository.findAuthor(id);

    if (!find) {
      throw new NotFoundError(Messages.AuthorNotFound);
    }
    return find;
  }

  async getAllAuthors() {
    const allAuthors = await AuthorRepository.getAllAuthors();
    return allAuthors;
  }

  async deleteAuthor(id: string) {
    const find = await AuthorRepository.findAuthor(id);

    if (!find) {
      throw new NotFoundError(Messages.AuthorNotFound);
    }
    const deletedAuthor = await AuthorRepository.deleteAuthor(id);
    return deletedAuthor;
  }

  async getBooksByAuthor(authorId: string) {
    const find = await AuthorRepository.findAuthor(authorId);

    if (!find) {
      throw new NotFoundError(Messages.AuthorNotFound);
    }
    const authorBookList = await AuthorRepository.getBooksByAuthor(authorId);
    return authorBookList;
  }
}

export default new AuthorService();
