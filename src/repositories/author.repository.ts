import { IAuthor } from '@src/types/author.interface';
import db from '@config/db';

export class AuthorRepository {
  async createAuthor(data: IAuthor) {
    const result = await db('authors').insert(data).returning('*');
    return result;
  }

  async updateAuthor(id: string, data: Partial<IAuthor>) {
    const result = await db('authors')
      .where({ id })
      .update(data)
      .returning('*');
    return result[0];
  }

  async findAuthor(id: string) {
    const result = await db('authors').where({ id }).returning('*');
    return result[0];
  }

  async getAllAuthors() {
    const result = await db('authors').select('*');
    return result;
  }

  async deleteAuthor(id: string) {
    const result = await db('authors').where({ id }).del();
    return result === 1;
  }

  async getBooksByAuthor(authorId: string) {
    const result = await db('books').where({ author_id: authorId }).select('*');
    return result;
  }
}

export default new AuthorRepository();
