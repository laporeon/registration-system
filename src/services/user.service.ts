import { User } from '@/interfaces';
import { UserRepository } from '@/repositories/user.repository';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userData: User): Promise<Response> {
    return await this.userRepository.create(userData);
  }

  async list(id?: string): Promise<Response> {
    return await this.userRepository.list(id);
  }

  async update(id: string, fieldsToUpdate: Partial<User>): Promise<any> {
    return await this.userRepository.update(id, fieldsToUpdate);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
