import fs from 'node:fs/promises';
import path from 'node:path';

import { User } from '../interfaces/User';

const folderPath = path.resolve(__dirname, '..', '..', 'src', 'data', 'users');

export const saveUserData = async (user: User) => {
  const index = await getLastIndex();

  const fileName =
    index + ' - ' + user.name.trim().toUpperCase().replace(/\s+/g, '') + '.txt';

  const filePath = path.join(folderPath, fileName);

  const fileContent = Object.values(user).join('\n');

  await fs.writeFile(filePath, fileContent);

  return;
};

const getLastIndex = async (): Promise<Number> => {
  const filesCount = await fs.readdir(folderPath);

  // TODO: add validation to exclude .gitkeep from file counting
  if (filesCount.length <= 0) return 1;

  return filesCount.length + 1;
};
