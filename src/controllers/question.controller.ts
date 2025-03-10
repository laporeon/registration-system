import fs from 'node:fs/promises';

import { answerSchema } from '../helpers/answerSchema';
import { COLORS } from '../helpers/colors';
import { filePath } from '../helpers/constants';
import { rl } from '../helpers/readLine';
import { UserController } from './user.controller';

export class QuestionController {
  constructor(private readonly userController: UserController) {}

  async getQuestions() {
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const questions = fileContent.split('\n');

    return questions;
  }

  async askQuestions(index = 0, answers: string[] = []): Promise<void> {
    const questions = await this.getQuestions();

    if (index >= questions.length) {
      const [name, email, age, height] = answers;

      await this.userController.createUser({ name, email, age, height });

      return;
    }

    // Colorized the question to make it more readable
    const coloredQuestion = `${COLORS.green}${COLORS.bright}${questions[index]}${COLORS.reset}`;

    return new Promise(resolve => {
      rl.question(`${coloredQuestion} `, async answer => {
        const result = answerSchema[index].safeParse(answer);

        if (!result.success) {
          console.log(
            `${COLORS.red}ERRO: ${result.error.errors[0].message} Tente novamente.${COLORS.reset}`,
          );
          resolve(this.askQuestions(index, answers));
        }

        answers.push(answer);
        resolve(this.askQuestions(index + 1, answers));
      });
    });
  }
}
