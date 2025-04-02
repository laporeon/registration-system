import express from 'express';
import 'express-async-errors';
import 'dotenv/config';

import { logger } from '@/helpers';
import { errorHandler } from '@/middlewares';
import { userRoutes, swaggerRoutes } from '@/routes';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/api/docs', swaggerRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server is running at: http://localhost:${PORT}`);
});
