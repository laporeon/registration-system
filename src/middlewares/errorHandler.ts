import { NextFunction, Response, Request } from 'express';

import { AppError } from '@errors/AppError';
import { logger } from '@helpers/index';

export const errorHandler = (
  err: Error,
  _: Request,
  response: Response,
  __: NextFunction,
) => {
  if (err instanceof AppError) {
    logger.error(err);
    response.status(err.statusCode).json({
      error: err.name,
      message: err.message,
      timestamp: new Date().toISOString(),
    });

    return;
  }

  response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
};
