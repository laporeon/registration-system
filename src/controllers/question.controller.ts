import fs from 'node:fs/promises';

import { COLORS } from '../helpers/colors';
import { filePath, rl, normalizeName } from '../helpers/constants';
import { saveQuestionToFile, overwriteFileContent } from '../helpers/files';
import {
  fixedQuestionsSchema,
  dynamicQuestionsSchema,
} from '../helpers/schemas';
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

    const coloredQuestions = questions.map(
      (question, index) =>
        `${COLORS.green}${COLORS.bright}${index + 1}) ${question} ${COLORS.reset}`,
    );

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

    return new Promise(resolve => {
      rl.question(coloredQuestions[index], async answer => {
        const schema = fixedQuestionsSchema[index] || dynamicQuestionsSchema;
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

  async deleteQuestion(index: string) {
    const parsedIndex = parseInt(index, 10);
    const questions = await this.getQuestions();

    if (parsedIndex >= 1 && parsedIndex <= 4)
      return console.log(`Você não pode deletar as perguntas 01 a 04.`);

    if (parsedIndex > questions.length)
      return console.log(`Não existe pergunta com esse ID.`);

    const updatedQuestions = questions.filter(
      (question, id) => id !== parsedIndex - 1,
    );

    await overwriteFileContent(updatedQuestions);
  }
}
