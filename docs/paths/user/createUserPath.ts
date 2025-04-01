export const createUserPath = {
  post: {
    tags: ['User'],
    summary: 'Create a new user.',
    description: '',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/userRequestBody',
            example: {
              name: 'Sabrina Carpenter',
              email: 'sabcarpenter@gmail.com',
              dob: '1999-05-11',
              address: {
                street: 'Fake Name Street',
                number: 10,
                city: 'Quakertown',
                zipCode: 18951,
              },
              description: 'Tall, blonde, singer, actress',
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Created',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/user',
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequestError',
      },
      500: {
        $ref: '#/components/internalServerError',
      },
    },
  },
};
