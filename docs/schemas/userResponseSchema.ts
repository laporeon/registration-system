export const userResponseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    dob: {
      type: 'string',
      format: 'date',
    },
    address: {
      type: 'object',
      properties: {
        street: {
          type: 'string',
        },
        number: {
          type: 'number',
        },
        city: {
          type: 'string',
        },
        zipCode: {
          type: 'number',
        },
      },
    },
    description: {
      type: 'string',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
    },
  },
};
