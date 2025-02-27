import fs from 'node:fs/promises';
import path from 'node:path';

const FILE_PATH = path.resolve(
  __dirname,
  '..',
  '..',
  'src',
  'data',
  'formulario.txt',
);

export const getFileContent = async () => {
  const fileContent = await fs.readFile(FILE_PATH, 'utf-8');

  const questions = fileContent.split('\n');

  return questions;
};
