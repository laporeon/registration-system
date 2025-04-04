import { Router } from 'express';

import { UserController } from '@/controllers/user.controller';
import { paramsSchema, querySchema, userSchema } from '@/helpers';
import {
  validateRequestBody,
  validateRequestParams,
  validateRequestQuery,
} from '@/middlewares';
import { UserRepository } from '@/repositories/user.repository';
import { UserService } from '@/services/user.service';

const routes = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

routes.get(
  '/:id?',
  validateRequestParams(paramsSchema),
  validateRequestQuery(querySchema),
  (req, res) => userController.list(req, res),
);

routes.post('/', validateRequestBody(userSchema), (req, res) =>
  userController.create(req, res),
);

routes.put(
  '/:id',
  validateRequestParams(paramsSchema),
  validateRequestBody(userSchema.partial()),
  (req, res) => userController.update(req, res),
);

routes.delete('/:id', validateRequestParams(paramsSchema), (req, res) =>
  userController.delete(req, res),
);

export { routes as userRoutes };
