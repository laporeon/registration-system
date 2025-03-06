import { User } from '../interfaces/User';
import { FilesController } from './files.controller';

export class UserController {
  private users: User[] = [];

  constructor(private readonly filesController: FilesController) {}

  async createUser(user: User) {
    await this.filesController.saveUserData(user);

    this.users.push(user);

    console.log('\nUsuário cadastrado com sucesso!');
  }

  async listUsers() {
    console.log('Usuários cadastrados: ');
    this.users.forEach((user, index) => {
      console.log(`${index + 1} - ${user.name}`);
    });
  }
}
