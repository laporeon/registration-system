import fs from 'node:fs/promises';

import { answerSchema, dynamicAnswerSchema } from '../helpers/answerSchema';
import { COLORS } from '../helpers/colors';
import { filePath, rl, normalizeName } from '../helpers/constants';
import { saveQuestionToFile } from '../helpers/files';
import { UserController } from './user.controller';

export class QuestionController {
  constructor(private readonly userController: UserController) {}

  async createQuestion(question: string) {
    await saveQuestionToFile(question);

    console.log('\nQuestão cadastrada com sucesso!');
  }

  async getQuestions() {
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const questions = fileContent.split('\n');

    return questions;
  }

  async askQuestions(index = 0, answers: string[] = []): Promise<void> {
    const questions = await this.getQuestions();

    if (index === questions.length) {
      const [name, email, age, height, ...data] = answers;

      await this.userController.createUser({
        name: normalizeName(name),
        email,
        age,
        height,
        data,
      });

      return;
    }

    // Colorized the question to make it more readable
    const coloredQuestion = `${COLORS.green}${COLORS.bright}${index + 1}) ${questions[index]}${COLORS.reset}`;

    return new Promise(resolve => {
      rl.question(`${coloredQuestion} `, async answer => {
        const schema = answerSchema[index] || dynamicAnswerSchema;
        const result = schema.safeParse(answer);

        if (!result.success) {
          console.log(
            `${COLORS.red}ERRO: ${result.error.errors[0].message} Tente novamente.${COLORS.reset}`,
          );
          return resolve(this.askQuestions(index, answers));
        }

        answers.push(answer);
        resolve(this.askQuestions(index + 1, answers));
      });
    });
  }
}
