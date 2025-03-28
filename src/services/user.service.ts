import { UserRepository } from 'src/repositories/user.repository';

import { User } from '@interfaces/User';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userData: User) {
    return await this.userRepository.create(userData);
  }

  async list() {
    return await this.userRepository.list();
  }
}
