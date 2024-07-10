import { NextFunction, Request, Response } from 'express';
import { failure } from './common-response';
import HttpStatus from './http-status';
import Messages from './messages';

interface CustomError {
  name: string;
  statusCode: HttpStatus;
  isOperational: boolean;
  description: string;
  errors: any;
}

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err?.description || JSON.stringify(err));
  const errors = err.errors || {};
  const httpStatusCode = err.statusCode || 500;
  const message = err.description || Messages.ServerError;
  return res.status(httpStatusCode).send(failure(message, errors));
};

export default errorHandler;
