import NotFoundError from '@common/errors/http404Error';
import Messages from '@common/messages';
import AuthorRepository from '@src/repositories/author.repository';
import BookRepository from '@src/repositories/book.repository';
import { IBook } from '@src/types/book.interface';

export class BookService {
  async createBook(data: IBook) {
    const createBook = await BookRepository.createBook(data);
    return createBook;
  }

  async updateBook(data: Partial<IBook>, id: string) {
    const book = await BookRepository.findBook(id);
    if (!book) {
      throw new NotFoundError(Messages.BookNotFound);
    }

    const updateBook = await BookRepository.updateBook(id, data);
    return updateBook;
  }

  async findBook(id: string) {
    const find = await BookRepository.findBook(id);

    if (!find) {
      throw new NotFoundError(Messages.BookNotFound);
    }
    return find;
  }

  async getAllBooks() {
    const allBooks = await BookRepository.getAllBooks();
    return allBooks;
  }

  async deleteBook(id: string) {
    const find = await BookRepository.findBook(id);

    if (!find) {
      throw new NotFoundError(Messages.BookNotFound);
    }
    const deletedBook = await BookRepository.deleteBook(id);
    return deletedBook;
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

export default new BookService();
