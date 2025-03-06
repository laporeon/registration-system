import fs from 'node:fs/promises';
import path from 'node:path';

import { User } from '../interfaces/User';

export class FilesController {
  private readonly filePath = path.resolve(
    __dirname,
    '..',
    '..',
    'src',
    'data',
    'formulario.txt',
  );

  private readonly folderPath = path.resolve(
    __dirname,
    '..',
    '..',
    'src',
    'data',
    'users',
  );

  async getQuestions() {
    const fileContent = await fs.readFile(this.filePath, 'utf-8');

    const questions = fileContent.split('\n');

    return questions;
  }

  async saveUserData(user: User) {
    const index = await this.getLastIndex();

    const fileName =
      index +
      ' - ' +
      user.name.trim().toUpperCase().replace(/\s+/g, '') +
      '.txt';

    const filePath = path.join(this.folderPath, fileName);

    const fileContent = Object.values(user).join('\n');

    await fs.writeFile(filePath, fileContent);

    return;
  }

  async getLastIndex() {
    const filesCount = await fs.readdir(this.folderPath);

    // TODO: add validation to exclude .gitkeep from file counting
    if (filesCount.length <= 0) return 1;

    return filesCount.length + 1;
  }
}
