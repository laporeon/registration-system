export const BadRequestError = {
  description: 'Bad Request',
  content: {
    'application/json': {
      example: {
        message: 'Invalid body schema',
        errors: [
          {
            code: 'too_small',
            minimum: 3,
            type: 'string',
            inclusive: true,
            exact: false,
            message: 'Name must have at least 3 characters',
            path: ['name'],
          },
        ],
      },
    },
  },
};
