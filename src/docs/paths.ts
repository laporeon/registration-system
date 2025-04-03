import {
  createUserPath,
  listUsersPath,
  deleteUsersPath,
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
