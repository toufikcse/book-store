import dotenv from 'dotenv';
dotenv.config();

export const ErrorName = {
  BAD_REQUEST: 'BAD REQUEST',
  NOT_FOUND: 'NOT FOUND',
  INTERNAL_SERVER_ERROR: 'INTERNAL SERVER ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  BAD_GATEWAY: 'BAD GATEWAY',
  CUSTOM_ERROR: 'CUSTOM ERROR',
};