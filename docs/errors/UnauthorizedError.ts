export const UnauthorizedError = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      example: {
        error: 'UnauthorizedError',
        message: 'Invalid or missing credentials.',
        timestamp: '2025-04-08T22:11:21.681Z',
      },
    },
  },
};
