import fs from 'node:fs/promises';
import path from 'node:path';

import { filePath, folderPath, normalizeName } from './constants';

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

  const normalizedName = normalizeName(name);

  return `${index} - ${normalizedName.replace(/\s+/g, '_')}.txt`;
};

const saveQuestionToFile = async (question: string) => {
  await fs.appendFile(filePath, `\n${question}`, {
    flag: 'a',
  });
};

export { getAllFiles, getLastFileIndex, createFileName, saveQuestionToFile };
