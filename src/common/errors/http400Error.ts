import BaseError from './baseError';
import HttpStatus from '@common/http-status';
import { ErrorName } from '@common/constants';
class BadRequestError extends BaseError {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST, ErrorName.BAD_REQUEST, message);
  }
}
export default BadRequestError;
