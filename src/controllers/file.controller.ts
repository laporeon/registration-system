import fs from 'node:fs/promises';
import path from 'node:path';

import { User } from '../interfaces/User';

export class FileController {
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
      user.name.trim().toLowerCase().replace(/\s+/g, '_') +
      '.txt';

    const filePath = path.join(this.folderPath, fileName);

    const fileContent = Object.values(user).join('\n');

    await fs.writeFile(filePath, fileContent);

    return;
  }

  async getLastIndex() {
    const filesCount = await fs.readdir(this.folderPath);

    const validFiles = filesCount.filter(file => file !== '.gitkeep');

    if (validFiles.length === 0) return 1;

    return validFiles.length + 1;
  }

  async getAllFileNames() {
    const files = await fs.readdir(this.folderPath);

    return files.filter(file => file !== '.gitkeep');
  }
}
