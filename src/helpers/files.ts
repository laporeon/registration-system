import fs from 'node:fs/promises';
import path from 'node:path';

import { folderPath } from './constants';

const getAllFiles = async () => {
  const files = await fs.readdir(folderPath);

  return files
    .filter(file => file !== '.gitkeep')
    .map(file => path.join(folderPath, file));
};

const getLastFileIndex = async () => {
  const filesCount = await fs.readdir(folderPath);

  const validFiles = filesCount.filter(file => file !== '.gitkeep');

  if (validFiles.length === 0) return 1;

  return validFiles.length + 1;
};

const createFileName = async (name: string) => {
  const index = await getLastFileIndex();

  return `${index} - ${name
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\s+/g, '_')}.txt`;
};

export { getAllFiles, getLastFileIndex, createFileName };
