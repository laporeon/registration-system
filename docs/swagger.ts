import {
  AlreadyRegisteredError,
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from '@/docs/errors';
import { authPaths, userPaths } from '@/docs/paths';
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
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT token in format: Bearer <token>',
      },
    },
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
  security: [{ bearerAuth: [] }],
  tags: ['User'],
  schemes: ['https', 'http'],
  paths: { ...authPaths, ...userPaths },
};
