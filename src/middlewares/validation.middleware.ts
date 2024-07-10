import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import RequestValidationError from '../common/errors/http422Error';
import Messages from '../common/messages';

const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors: any = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new RequestValidationError(Messages.ValidationError, errors.errors),
    );
  }
  next();
};

export default validationMiddleware;
