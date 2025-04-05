import {
  createUserPath,
  deleteUsersPath,
  listUsersPath,
  updateUserPath,
} from './paths/';

export default {
  '/users': { ...createUserPath },
  '/users/{id}': {
    ...listUsersPath,
    ...updateUserPath,
    ...deleteUsersPath,
  },
};
