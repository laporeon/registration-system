import { Router } from 'express';

import { AuthController } from '@/controllers/auth.controller';
import { loginSchema, userSchema } from '@/helpers';
import { validateRequestBody } from '@/middlewares';
import { UserRepository } from '@/repositories/user.repository';
import { AuthService } from '@/services/auth.service';
import { UserService } from '@/services/user.service';

const routes = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const authService = new AuthService(userRepository);
const authController = new AuthController(userService, authService);

routes.post('/signup', validateRequestBody(userSchema), (req, res) =>
  authController.register(req, res)
);

routes.post('/login', validateRequestBody(loginSchema), (req, res) =>
  authController.login(req, res)
);

export { routes as authRoutes };
