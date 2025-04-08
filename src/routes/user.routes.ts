import { Router } from 'express';

import { UserController } from '@/controllers/user.controller';
import { paramsSchema, userSchema } from '@/helpers';
import {
  authenticate,
  validateRequestBody,
  validateRequestParams,
} from '@/middlewares';
import { UserRepository } from '@/repositories/user.repository';
import { UserService } from '@/services/user.service';

const routes = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

routes.get(
  '/:id?',
  authenticate,
  validateRequestParams(paramsSchema),
  (req, res) => userController.list(req, res)
);

routes.put(
  '/:id',
  authenticate,
  validateRequestParams(paramsSchema),
  validateRequestBody(userSchema.partial()),
  (req, res) => userController.update(req, res)
);

routes.delete(
  '/:id',
  authenticate,
  validateRequestParams(paramsSchema),
  (req, res) => userController.delete(req, res)
);

export { routes as userRoutes };
