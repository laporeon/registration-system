import { RequestHandler } from 'express';
import { ZodTypeAny, z } from 'zod';

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
