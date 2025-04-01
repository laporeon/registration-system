export const invalidRequiredFieldError = {
  description: 'Invalid Required Field',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error',
      },
      example: {
        error: 'InvalidRequiredField',
        message: 'Invalid ID.',
        timestamp: '2025-04-01T19:45:23.590Z',
      },
    },
  },
};
