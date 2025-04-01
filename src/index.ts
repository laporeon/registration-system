import express, { Request, Response } from 'express';
import 'express-async-errors';

import { env } from '@/config/env';
import { logger } from '@/helpers';
import { errorHandler } from '@/middlewares';
import { userRoutes } from '@/routes/user.routes';

const app = express();

const PORT = env.port || 3000;

app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (_: Request, res: Response) => {
  res.json({ message: 'Hello!' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running at: http://localhost:${PORT}`);
});
