import { RequestHandler } from 'express';
import { z, ZodTypeAny } from 'zod';

import { HTTPStatus, logger } from '@/helpers';

const validate = (
  schema: ZodTypeAny,
  source: 'body' | 'params' | 'query'
): RequestHandler => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req[source]);
      next();
    } catch (err) {
      if (err instanceof z.ZodError) {
        logger.error({ errors: err.errors });
        res.status(HTTPStatus.BAD_REQUEST).json({
          message: `Invalid ${source} schema`,
          errors: err.errors,
        });
      } else {
        next(err);
      }
    }
  };
};

const validateRequestBody = (schema: ZodTypeAny): RequestHandler => {
  return validate(schema, 'body');
};

const validateRequestParams = (schema: ZodTypeAny): RequestHandler => {
  return validate(schema, 'params');
};

const validateRequestQuery = (schema: ZodTypeAny): RequestHandler => {
  return validate(schema, 'query');
};

export { validateRequestBody, validateRequestParams, validateRequestQuery };
