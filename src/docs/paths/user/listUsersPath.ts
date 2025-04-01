export const listUsersPath = {
  get: {
    tags: ['User'],
    summary: 'Retrieve all users or retrieve user by id.',
    description: '',
    parameters: [
      {
        name: 'userId',
        in: 'path',
        description: 'user id',
        required: false,
        schema: {
          type: 'string',
        },
        allowEmptyValue: true,
      },
    ],
    responses: {
      200: {
        description: 'Ok',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/user',
            },
          },
        },
      },
      400: {
        $ref: '#/components/invalidRequiredFieldError',
      },
      404: {
        $ref: '#/components/notFoundError',
      },
      500: {
        $ref: '#/components/internalServerError',
      },
    },
  },
};
