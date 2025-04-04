export const invalidParamsError = {
  description: 'Bad Request',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error',
      },
      example: {
        message: 'Invalid params schema',
        errors: [
          {
            message: 'Invalid MongoDB ID format',
          },
        ],
      },
    },
  },
};
