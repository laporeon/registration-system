import { Router } from 'express';

import { UserController } from '@controllers/user.controller';
import { userSchema } from '@helpers/userSchema';
import { validateRequestBody } from '@middlewares/zodValidator';
import { UserRepository } from '@repositories/user.repository';
import { UserService } from '@services/user.service';

const routes = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

routes.get('/:id?', async (req, res) => userController.list(req, res));

routes.post('/', validateRequestBody(userSchema), async (req, res) =>
  userController.create(req, res),
);

routes.delete('/:id', async (req, res) => userController.delete(req, res));

export { routes as userRoutes };
