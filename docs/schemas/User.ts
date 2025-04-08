export const User = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      format: 'ObjectId',
      example: '67f41038f1c39e614b577c60',
    },
    name: { type: 'string', example: 'Sabrina Carpenter' },
    email: {
      type: 'string',
      format: 'email',
      example: 'sabrinacarpenter@gmail.com',
    },
    password: { type: 'string', format: 'password', example: '!P4ssw0rd123' },
    dob: { type: 'string', format: 'date', example: '1999-05-11' },
    address: {
      type: 'object',
      properties: {
        street: { type: 'string', example: 'Fake Name Street' },
        number: { type: 'number', example: 10 },
        city: { type: 'string', example: 'Quakertown' },
        zipCode: { type: 'number', example: '18951' },
      },
    },
    description: { type: 'string', example: '5feet, blonde, singer, actress.' },
    createdAt: {
      type: 'string',
      format: 'date-time',
      example: '2025-04-03T17:49:44.937Z',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      example: '2025-04-07T18:43:45.246Z',
    },
  },
};
