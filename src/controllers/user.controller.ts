import { Request, Response } from 'express';

import { HTTPStatus } from '@helpers/httpStatus';
import { UserService } from '@services/user.service';

export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(request: Request, response: Response): Promise<any> {
    try {
      const user = await this.userService.create(request.body);
      return response.status(HTTPStatus.CREATED).json(user);
    } catch (error) {
      return response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async list(request: Request, response: Response): Promise<any> {
    try {
      const users = await this.userService.list(request.params?.id);
      return response.status(HTTPStatus.OK).json(users);
    } catch (error) {
      return response.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async delete(request: Request, response: Response): Promise<any> {
    await this.userService.delete(request.params.id);
    return response.status(HTTPStatus.NO_CONTENT).json();
  }
}
