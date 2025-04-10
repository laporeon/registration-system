import { Request, Response } from 'express';

import { HTTPStatus } from '@/helpers';
import { UserService } from '@/services/user.service';

export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(request: Request, response: Response): Promise<any> {
    const user = await this.userService.create(request.body);
    return response.status(HTTPStatus.CREATED).json(user);
  }

  async list(request: Request, response: Response): Promise<any> {
    const users = await this.userService.list(request.params?.id);
    return response.status(HTTPStatus.OK).json(users);
  }

  async update(request: Request, response: Response): Promise<any> {
    const user = await this.userService.update(request.params.id, request.body);
    return response.status(HTTPStatus.OK).json(user);
  }

  async delete(request: Request, response: Response): Promise<any> {
    await this.userService.delete(request.params.id);
    return response.status(HTTPStatus.NO_CONTENT).json();
  }
}
