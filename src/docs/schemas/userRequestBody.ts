export const userRequestBody = {
  type: 'object',
  properties: {
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
  },
  required: ['name', 'email', 'dob', 'address'],
};
