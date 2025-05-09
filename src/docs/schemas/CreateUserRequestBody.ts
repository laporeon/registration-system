export const CreateUserRequestBody = {
  type: 'object',
  properties: {
    name: { type: 'string', example: 'Sabrina Carpenter' },
    email: {
      type: 'string',
      format: 'email',
      example: 'sabrinacarpenter@gmail.com',
    },
    password: {
      type: 'string',
      format: 'password',
      example: '!P4ssw0rd123',
    },
    dob: {
      type: 'string',
      format: 'date',
      example: '1999-05-11',
    },
    address: {
      type: 'object',
      properties: {
        street: { type: 'string', example: 'Fake Name Street' },
        number: { type: 'number', example: 10 },
        city: { type: 'string', example: 'Quakertown' },
        zipCode: { type: 'string', example: '18951' },
      },
    },
    description: { type: 'string', example: '5feet, blonde, singer, actress.' },
  },
  required: ['name', 'email', 'password', 'dob', 'address'],
};
