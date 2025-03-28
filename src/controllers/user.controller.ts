import { Request, Response } from 'express';

import { UserService } from '@services/user.service';

export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(request: Request, response: Response): Promise<any> {
    try {
      const user = await this.userService.create(request.body);
      return response.status(201).json(user);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: 'Internal Server Error.' });
    }
  }

  async list(_: Request, response: Response): Promise<any> {
    try {
      const users = await this.userService.list();
      return response.status(200).json({ users });
    } catch (error) {
      console.log(error);
      return response.status(500).json(error);
    }
  }
}
