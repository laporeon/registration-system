export const internalServerError = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error',
      },
      example: {
        status: 'error',
        message: `Internal server error.`,
      },
    },
  },
};
