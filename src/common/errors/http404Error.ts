import { ErrorName } from '../constants';
import HttpStatus from '../http-status';
import BaseError from './baseError';

class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND, ErrorName.NOT_FOUND, message);
  }
}
export default NotFoundError;
