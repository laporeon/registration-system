import { errorSchema, userRequestBody, userResponseSchema } from './schemas/';

export default {
  error: errorSchema,
  user: userResponseSchema,
  userRequestBody: userRequestBody,
};
