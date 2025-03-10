import fs from 'node:fs/promises';
import path from 'node:path';

import { folderPath } from '../helpers/constants';
import { createFileName, getAllFiles } from '../helpers/files';
import { User } from '../interfaces/User';

export class UserController {
  async createUser(user: User) {
    const fileName = await createFileName(user.name);

    const filePath = path.join(folderPath, fileName);

    const fileContent = Object.values(user).join('\n');

    await fs.writeFile(filePath, fileContent);

    console.log('\nUsuário cadastrado com sucesso!');
  }

  async listUsers() {
    const files = await getAllFiles();

    if (files.length === 0) return console.log('\nNenhum usuário cadastrado.');

    console.log('\nUsuários cadastrados: ');

    let index = 1;

    for (const file of files) {
      const fileContent = await fs.readFile(file, 'utf-8');
      const user = fileContent.split('\n')[0];
      console.log(`${index} - ${this.normalizeUsername(user)}`);
      index++;
    }
  }

  normalizeUsername(user: string) {
    return user.replace(/\b\w/g, c => c.toUpperCase());
  }
}
