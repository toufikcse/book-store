import db from '@config/db';
import { IBook } from '@src/types/book.interface';

export class BookRepository {
  async createBook(data: IBook) {
    const authorExists = await db('authors')
      .where({ id: data.author_id })
      .first();

    if (!authorExists) {
      throw new Error('Author not found');
    }

    const result = await db('books').insert(data).returning('*');
    return result[0];
  }

  async updateBook(id: string, data: Partial<IBook>) {
    const result = await db('books').where({ id }).update(data).returning('*');
    return result[0];
  }

  async findBook(id: string) {
    const result = await db('books').where({ id }).returning('*');
    return result[0];
  }

  async getAllBooks() {
    const result = await db('books').select('*');
    return result;
  }

  async deleteBook(id: string) {
    const result = await db('books').where({ id }).del();
    return result === 1;
  }
}

export default new BookRepository();
