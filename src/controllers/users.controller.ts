import { User } from '../interfaces/User';
import { FilesController } from './files.controller';

export class UserController {
  constructor(private readonly filesController: FilesController) {}

  async createUser(user: User) {
    await this.filesController.saveUserData(user);

    console.log('\nUsuário cadastrado com sucesso!');
  }

  async listUsers() {
    const files = await this.filesController.getAllFileNames();

    if (files.length === 0) return console.log('\nNenhum usuário cadastrado.');

    console.log('\nUsuários cadastrados: ');

    files.forEach(file => {
      const user = this.normalizeUsername(file);
      console.log(user);
    });
  }

  normalizeUsername(fileName: string) {
    return fileName
      .replace(
        /(\d+ - )([^_\.]+)(?:_([^_\.]+))?(?:_([^\.]+))?\.txt/,
        '$1$2 $3 $4',
      )
      .replace(/\b\w/g, c => c.toUpperCase());
  }
}
