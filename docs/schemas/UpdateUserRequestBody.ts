export const UpdateUserRequestBody = {
  type: 'object',
  properties: {
    name: { type: 'string', example: 'Sabrina Hall' },
    email: { type: 'email', example: 'sabrinahall@gmail.com' },
    password: { type: 'password', example: '!NewP4ssw0rd34' },
    address: {
      type: 'object',
      properties: {
        street: { type: 'string', example: 'New Fake Name Street' },
        number: { type: 'number', example: 300 },
        city: { type: 'string', example: 'Los Angeles' },
        zipCode: { type: 'number', example: '2050' },
      },
    },
    description: { type: 'string', example: 'Si, brunette, singer, actress.' },
  },
};
