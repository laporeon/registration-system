import express from 'express';
import 'express-async-errors';

import { env } from '@/config/env';
import { logger } from '@/helpers';
import { errorHandler } from '@/middlewares';
import { userRoutes, swaggerRoutes } from '@/routes';

const app = express();

const PORT = env.port || 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/api/docs', swaggerRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running at: http://localhost:${PORT}`);
});
