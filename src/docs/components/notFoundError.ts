export const notFoundError = {
  description: 'Not Found',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error',
      },
      example: {
        error: 'NotFoundError',
        message: 'Resource Not Found',
        timestamp: '2025-04-01T19:38:08.530Z',
      },
    },
  },
};
