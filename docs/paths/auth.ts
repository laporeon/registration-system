import {
  AlreadyRegisteredError,
  BadRequestError,
  InternalServerError,
  UnauthorizedError,
} from '@/docs/errors';
import { CreateUserRequestBody, LoginUserBody } from '@/docs/schemas';

export const authPaths = {
  '/auth/signup': {
    post: {
      tags: ['Auth'],
      summary: 'Register a new user.',
      description: '',
      security: [],
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
                    example: 'User successfully registered!',
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
  '/auth/login': {
    post: {
      tags: ['Auth'],
      summary: 'Login a user.',
      description: '',
      security: [],
      requestBody: {
        required: true,
        content: { 'application/json': { schema: LoginUserBody } },
      },
      responses: {
        '200': {
          description: 'Ok',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'User successfully authenticated',
                  },
                  token: {
                    type: 'string',
                    format: 'jwt',
                    example:
                      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2YWx1ZSIsImtleTIiOiJ2YWx1ZTIiLCJpYXQiOjE2MzQxNzgxMTB9.vnXM0oxw05QH1Vs6RsvYp6LaEqFFqZ-NExQMXBgP7Mk',
                  },
                },
              },
            },
          },
        },
        '401': UnauthorizedError,
        '500': InternalServerError,
      },
    },
  },
};
