import BaseError from './baseError';
import HttpStatus from '@common/http-status';
import { ErrorName } from '@common/constants';
class RequestValidationError extends BaseError {
  constructor(message: string, errors: any) {
    super(
      message,
      HttpStatus.UNPROCESSABLE_ENTITY,
      ErrorName.BAD_REQUEST,
      message,
      errors,
    );
  }
}
export default RequestValidationError;
