import fs from 'node:fs/promises';
import path from 'node:path';

import { User } from '../interfaces/User';

const FOLDER_PATH = path.resolve(__dirname, '..', '..', 'src', 'data', 'users');

export const saveUserData = async (user: User) => {
  const INDEX = await getLastIndex();

  const FILE_NAME =
    INDEX + ' - ' + user.name.trim().toUpperCase().replace(/\s+/g, '') + '.txt';

  const FILE_PATH = path.join(FOLDER_PATH, FILE_NAME);

  const FILE_CONTENT = Object.values(user).join('\n');

  await fs.writeFile(FILE_PATH, FILE_CONTENT);

  return;
};

const getLastIndex = async (): Promise<Number> => {
  const filesCount = await fs.readdir(FOLDER_PATH);

  // TODO: add validation to exclude .gitkeep from file counting
  if (filesCount.length <= 0) return 1;

  return filesCount.length + 1;
};
