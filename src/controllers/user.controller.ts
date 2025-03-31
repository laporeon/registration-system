import { Request, Response } from 'express';

import { HTTPStatus } from '@helpers/httpStatus';
import { UserService } from '@services/user.service';

export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(request: Request, response: Response): Promise<Response> {
    const user = await this.userService.create(request.body);
    return response.status(HTTPStatus.CREATED).json(user);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const users = await this.userService.list(request.params?.id);
    return response.status(HTTPStatus.OK).json(users);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    await this.userService.delete(request.params.id);
    return response.status(HTTPStatus.NO_CONTENT).json();
  }
}
