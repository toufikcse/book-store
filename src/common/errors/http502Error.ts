import { ErrorName } from '@common/constants';
import HttpStatus from '@common/http-status';
import BaseError from './baseError';

class BadGateway extends BaseError {
  constructor(message: string) {
    super(message, HttpStatus.BAD_GATEWAY, ErrorName.BAD_GATEWAY, message);
  }
}
export default BadGateway;
