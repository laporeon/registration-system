import { Request, Response } from 'express';

import { HTTPStatus } from '@/helpers';
import { AuthService } from '@/services/auth.service';
import { UserService } from '@/services/user.service';

export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  async register(request: Request, response: Response): Promise<any> {
    const user = await this.userService.create(request.body);
    return response.status(HTTPStatus.CREATED).json(user);
  }

  async login(request: Request, response: Response): Promise<any> {
    const data = await this.authService.execute(request.body);
    return response.status(HTTPStatus.OK).json(data);
  }
}
