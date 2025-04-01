import { createUserPath, listUsersPath } from './paths/';

export default {
  '/users': { ...createUserPath },
  '/users/{userId}': { ...listUsersPath },
};
