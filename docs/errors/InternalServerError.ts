export const InternalServerError = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      example: { status: 'error', message: 'Internal server error.' },
    },
  },
};
