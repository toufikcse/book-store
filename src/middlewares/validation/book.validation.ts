import { default as validationMessages } from '@common/validation-messages';
import validationMiddleware from '@middlewares/validation.middleware';
import { body } from 'express-validator';
import AuthorRepository from '@src/repositories/author.repository';

const bookValidator = {
  createBook: [
    body('title')
      .notEmpty()
      .withMessage(validationMessages.BookTitleRequired)
      .isString()
      .withMessage(validationMessages.BookTitleType),
    body('description')
      .optional()
      .isString()
      .withMessage(validationMessages.DescriptionType),
    body('published_date')
      .isDate({ format: 'YYYY-MM-DD' })
      .notEmpty()
      .withMessage(validationMessages.PublishedDateType)
      .custom(value => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          throw new Error(validationMessages.PublishedDateType);
        }
        return true;
      }),
    body('author_id')
      .notEmpty()
      .withMessage(validationMessages.AuthorIdRequired)
      .isString()
      .withMessage(validationMessages.AuthorIdType)
      .custom(async (value, { req }) => {
        const find = await AuthorRepository.findAuthor(value);
        if (!find) {
          throw new Error(validationMessages.AuthorIdNotExist);
        }
        return true;
      }),
    validationMiddleware,
  ],
  updateBook: [
    body('title')
      .optional()
      .notEmpty()
      .withMessage(validationMessages.BookTitleRequired)
      .isString()
      .withMessage(validationMessages.BookTitleType),
    body('description')
      .optional()
      .isString()
      .withMessage(validationMessages.DescriptionType),
    body('published_date')
      .optional()
      .isDate({ format: 'YYYY-MM-DD' })
      .notEmpty()
      .withMessage(validationMessages.PublishedDateType)
      .custom(value => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          throw new Error(validationMessages.PublishedDateType);
        }
        return true;
      }),
    body('author_id')
      .optional()
      .notEmpty()
      .withMessage(validationMessages.AuthorIdRequired)
      .isString()
      .withMessage(validationMessages.AuthorIdType)
      .custom(async (value, { req }) => {
        const find = await AuthorRepository.findAuthor(value);
        if (!find) {
          throw new Error(validationMessages.AuthorIdNotExist);
        }
        return true;
      }),
    validationMiddleware,
  ],
};

export default bookValidator;
