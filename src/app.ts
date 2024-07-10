import moduleAlias from 'module-alias';
moduleAlias.addAliases({ '@src': __dirname });
moduleAlias.addAliases({ '@common': __dirname + '/common' });
moduleAlias.addAliases({ '@config': __dirname + '/config' });
moduleAlias.addAliases({ '@middlewares': __dirname + '/middlewares' });

import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bookStoreRoutes from './routes/index.route';
import NotFoundError from './common/errors/http404Error';
import errorHandler from '@common/error-handler';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response) => {
  return res
    .status(200)
    .send({ success: true, message: 'Service health is fine.' });
});

app.use('/api/book-store', bookStoreRoutes);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError(`Request API route ${req.path} is not found`));
});

//Error Handling Middleware
app.use(errorHandler);

export default app;
