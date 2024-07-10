import BaseError from './baseError';
import HttpStatus from '@common/http-status';
import { ErrorName } from '@common/constants';

class UnAuthorizedError extends BaseError {
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED, ErrorName.UNAUTHORIZED, message);
  }
}
export default UnAuthorizedError;
