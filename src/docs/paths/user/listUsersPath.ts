export const listUsersPath = {
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
        schema: {
          type: 'string',
          format: 'ObjectId',
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
        $ref: '#/components/invalidParamsError',
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
