export const updateUserSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Sabrina Hall',
    },
    email: {
      type: 'email',
      example: 'sabrinahall@gmail.com',
    },
  },
};
