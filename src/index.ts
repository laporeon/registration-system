import 'express-async-errors';
import 'dotenv/config';

import express from 'express';

import { env } from '@/config/env';
import { logger } from '@/helpers';
import { errorHandler } from '@/middlewares';
import { swaggerRoutes, userRoutes } from '@/routes';

const app = express();

const PORT = env.port;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/docs', swaggerRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running at: http://localhost:${PORT}`);
});
