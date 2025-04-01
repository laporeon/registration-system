import { createUserPath, listUsersPath, deleteUsersPath } from './paths/';

export default {
  '/users': { ...createUserPath },
  '/users/{userId}': { ...listUsersPath, ...deleteUsersPath },
};
