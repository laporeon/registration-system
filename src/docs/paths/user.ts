import {
  AlreadyRegisteredError,
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from '@/docs/errors';
import {
  CreateUserRequestBody,
  UpdateUserRequestBody,
  User,
} from '@/docs/schemas';

export const userPaths = {
  '/users': {
    post: {
      tags: ['User'],
      summary: 'Create a new user.',
      description: '',
      requestBody: {
        required: true,
        content: { 'application/json': { schema: CreateUserRequestBody } },
      },
      responses: {
        '201': {
          description: 'Created',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'User successfully created!',
                  },
                  _id: {
                    type: 'string',
                    format: 'ObjectId',
                    example: '67f41038f1c39e614b577c60',
                  },
                },
              },
            },
          },
        },
        '400': BadRequestError,
        '409': AlreadyRegisteredError,
        '500': InternalServerError,
      },
    },
  },
  '/users/{id}': {
    get: {
      tags: ['User'],
      summary: 'Retrieve all users or retrieve user by id.',
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
          required: false,
          schema: {
            type: 'string',
            format: 'ObjectId',
          },
        },
      ],
      responses: {
        '204': { description: 'No Content' },
        '400': BadRequestError,
        '404': NotFoundError,
        '500': InternalServerError,
      },
    },
  },
};
