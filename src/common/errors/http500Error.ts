import { ErrorName } from '@common/constants';
import HttpStatus from '@common/http-status';
import BaseError from './baseError';

class InternalServerError extends BaseError {
  constructor(message: string) {
    super(
      message,
      HttpStatus.INTERNAL_SERVER_ERROR,
      ErrorName.INTERNAL_SERVER_ERROR,
      message,
    );
  }
}
export default InternalServerError;
