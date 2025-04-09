import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
} from '@/docs/errors';
import { UpdateUserRequestBody, User } from '@/docs/schemas';

export const userPaths = {
  '/users/{id}': {
    get: {
      tags: ['User'],
      summary: 'Retrieves all users or retrieves user by id.',
      description: '',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'user id',
          required: false,
          schema: { type: 'string', format: 'ObjectId' },
          allowEmptyValue: true,
        },
      ],
      responses: {
        '200': {
          description: 'Ok',
          content: { 'application/json': { schema: User } },
        },
        '400': BadRequestError,
        '401': UnauthorizedError,
        '404': NotFoundError,
        '500': InternalServerError,
      },
    },
    put: {
      tags: ['User'],
      summary: 'Update user information.',
      description: '',
      requestBody: {
        required: true,
        content: { 'application/json': { schema: UpdateUserRequestBody } },
      },
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'user id',
          required: true,
          schema: { type: 'string', format: 'ObjectId' },
        },
      ],
      responses: {
        '200': {
          description: 'Ok',
          content: { 'application/json': { schema: User } },
        },
        '400': BadRequestError,
        '401': UnauthorizedError,
        '404': NotFoundError,
        '500': InternalServerError,
      },
    },
    delete: {
      tags: ['User'],
      summary: 'Delete a user.',
      description: '',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'user id',
          required: true,
          schema: {
            type: 'string',
            format: 'ObjectId',
          },
        },
      ],
      responses: {
        '204': { description: 'No Content' },
        '400': BadRequestError,
        '401': UnauthorizedError,
        '404': NotFoundError,
        '500': InternalServerError,
      },
    },
  },
};
