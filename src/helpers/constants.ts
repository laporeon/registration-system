import path from 'node:path';
import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const filePath = path.resolve(__dirname, '../../src/data/formulario.txt');

const folderPath = path.resolve(__dirname, '../../src/data/users');

export { filePath, folderPath, rl };
