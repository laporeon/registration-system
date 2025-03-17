import path from 'node:path';
import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const filePath = path.resolve(__dirname, '../../data/formulario.txt');

const folderPath = path.resolve(__dirname, '../../data/users');
console.log({ folderPath, filePath });

const normalizeName = (name: string) => {
  return name
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, c => c.toUpperCase());
};

export { filePath, folderPath, rl, normalizeName };
