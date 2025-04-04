export const updateUserPath = {
  put: {
    tags: ['User'],
    summary: 'Update user information.',
    description: '',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateUserRequestBody',
            example: {
              email: 'newemail@gmail.com',
            },
          },
        },
      },
    },
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
        description: 'Bad Request',
        oneOf: [
          { $ref: '#/components/badRequestError' },
          { $ref: '#/components/invalidParamsError' },
        ],
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
