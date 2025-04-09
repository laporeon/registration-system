export const LoginUserBody = {
  type: 'object',
  properties: {
    email: { type: 'email', example: 'sabrinacarpenter@gmail.com' },
    password: { type: 'password', example: '!P4ssw0rd123' },
  },
};
