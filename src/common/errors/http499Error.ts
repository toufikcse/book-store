import BaseError from './baseError';
import HttpStatus from '@common/http-status';
import { ErrorName } from '@common/constants';
class CustomError extends BaseError {
  constructor(message: string) {
    super(message, HttpStatus.CUSTOM, ErrorName.CUSTOM_ERROR, message);
  }
}
export default CustomError;
