import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { env } from '@/config/env';
import { UnauthorizedError } from '@/errors';

export const authenticate = (
  request: Request,
  _: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization?.split(' ')[1];

  if (!token || !request.headers.authorization) throw new UnauthorizedError();

  const decoded = jwt.verify(token, env.secret) as { id: string };

  request.user = { _id: decoded.id };

  next();
};
