import {
  errorSchema,
  updateUserSchema,
  userRequestBody,
  userSchema,
} from './schemas/';

export default {
  error: errorSchema,
  user: userSchema,
  userRequestBody: userRequestBody,
  updateUserRequestBody: updateUserSchema,
};
