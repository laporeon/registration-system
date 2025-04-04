export const deleteUsersPath = {
  delete: {
    tags: ['User'],
    summary: 'Delete a user.',
    description: '',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'user id',
        required: true,
        schema: {
          type: 'string',
          format: 'ObjectId',
        },
      },
    ],
    responses: {
      204: {
        description: 'No Content',
      },
      400: {
        $ref: '#/components/invalidParamsError',
      },
      404: {
        $ref: '#/components/notFoundError',
      },
      500: {
        $ref: '#/components/internalServerError',
      },
    },
  },
};
