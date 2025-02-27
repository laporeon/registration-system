import fs from 'node:fs/promises';
import path from 'node:path';

const filePath = path.resolve(
  __dirname,
  '..',
  '..',
  'src',
  'data',
  'formulario.txt',
);

export const getFileContent = async () => {
  const fileContent = await fs.readFile(filePath, 'utf-8');

  const questions = fileContent.split('\n');

  return questions;
};
