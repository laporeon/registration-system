import {
  AlreadyRegisteredError,
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from '@/docs/errors';
import { userPaths } from '@/docs/paths';
import {
  CreateUserRequestBody,
  UpdateUserRequestBody,
  User,
} from '@/docs/schemas';

export const swagger = {
  openapi: '3.0.0',
  info: {
    title: 'WiredCraft API',
    version: '1.0.0',
    license: { name: 'MIT', url: 'https://spdx.org/licenses/MIT.html' },
  },
  components: {
    schemas: {
      User,
      CreateUserRequestBody,
      UpdateUserRequestBody,
      AlreadyRegisteredError,
      BadRequestError,
      InternalServerError,
      NotFoundError,
    },
  },
  tags: ['User'],
  schemes: ['https', 'http'],
  paths: userPaths,
};
