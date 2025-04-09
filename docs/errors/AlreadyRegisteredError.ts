export const AlreadyRegisteredError = {
  description: 'Conflict',
  content: {
    'application/json': {
      example: {
        error: 'AlreadyRegisteredError',
        message: 'Email already registered.',
        timestamp: '2025-04-03T18:17:35.889Z',
      },
    },
  },
};
