import { default as validationMessages } from '@common/validation-messages';
import validationMiddleware from '@middlewares/validation.middleware';
import { body } from 'express-validator';

const authorValidator = {
  createAuthor: [
    body('name')
      .notEmpty()
      .withMessage(validationMessages.AuthorNameRequired)
      .isString()
      .withMessage(validationMessages.AuthorNameType)
      .custom(value => {
        if (/^\d+$/.test(value)) {
          throw new Error(validationMessages.NonNumericFieldType);
        }
        return true;
      }),
    body('bio')
      .optional()
      .isString()
      .withMessage(validationMessages.AuthorBioType),
    body('birthdate')
      .isDate({ format: 'YYYY-MM-DD' })
      .notEmpty()
      .withMessage(validationMessages.AuthorBirthDateType)
      .custom(value => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          throw new Error(validationMessages.AuthorBirthDateType);
        }
        return true;
      }),
    validationMiddleware,
  ],
  updateAuthor: [
    body('name')
      .optional()
      .notEmpty()
      .withMessage(validationMessages.AuthorNameRequired)
      .isString()
      .withMessage(validationMessages.AuthorNameType)
      .custom(value => {
        if (/^\d+$/.test(value)) {
          throw new Error(validationMessages.NonNumericFieldType);
        }
        return true;
      }),
    body('bio')
      .optional()
      .isString()
      .withMessage(validationMessages.AuthorBioType),
    body('birthdate')
      .optional()
      .isDate({ format: 'YYYY-MM-DD' })
      .notEmpty()
      .withMessage(validationMessages.AuthorBirthDateType)
      .custom(value => {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          throw new Error(validationMessages.AuthorBirthDateType);
        }
        return true;
      }),
    validationMiddleware,
  ],
};

export default authorValidator;
