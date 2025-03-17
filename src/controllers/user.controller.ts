import fs from 'node:fs/promises';
import path from 'node:path';

import { folderPath, normalizeName } from '@helpers/constants';
import { createFileName, getAllFiles } from '@helpers/files';
import { User } from '@interfaces/User';

export class UserController {
  async createUser({ name, email, age, height, data = [] }: User) {
    const fileName = await createFileName(name);

    const filePath = path.join(folderPath, fileName);

    const fileContent = [name, email, age, height, ...data].join('\n');

    await fs.writeFile(filePath, fileContent);

    console.log('\nUsuário cadastrado com sucesso!');
  }

  async listUsers() {
    const users = await this.getUsers();

    if (users.length === 0) return console.log('\nNenhum usuário cadastrado.');

    let index = 1;

    console.log('\nUsuários cadastrados: ');

    for (const user of users) {
      console.log(`${index} - ${user}`);
      index++;
    }
  }

  async getUsers() {
    const files = await getAllFiles();

    const users = await Promise.all(
      files.map(async file => {
        const fileContent = await fs.readFile(file, 'utf-8');
        const user = fileContent.split('\n')[0];
        return user;
      }),
    );

    return users;
  }

  async getUserByName(name: string) {
    const users = await this.getUsers();

    const normalizedName = normalizeName(name);

    const matchedUsers = users.filter(user => user.startsWith(normalizedName));

    if (matchedUsers.length === 0)
      return console.log(
        `\nNenhum usuário cadastrado com o nome "${normalizedName}".`,
      );

    console.log(`\nUsuários encontrados com o nome "${normalizedName}":`);
    return matchedUsers.forEach(user => {
      console.log(user);
    });
  }
}
