import { RequestHandler } from 'express';
import { ZodTypeAny, z } from 'zod';

import { logger } from '@helpers/index';

const validate = (
  schema: ZodTypeAny,
  source: 'body' | 'params' | 'query',
): RequestHandler => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req[source]);
      next();
    } catch (err) {
      if (err instanceof z.ZodError) {
        logger.error({
          errors: err.errors.map(error => {
            return {
              message: error.message,
              path: error.path,
            };
          }),
        });
        res.status(400).json({
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
