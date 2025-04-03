export const alreadyRegisteredError = {
  description: 'Conflict',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error',
      },
      example: {
        error: 'AlreadyRegisteredError',
        message: 'Email already registered.',
        timestamp: '2025-04-03T18:17:35.889Z',
      },
    },
  },
};
