import { answerSchema } from '../helpers/answerSchema';
import { COLORS } from '../helpers/colors';
import { rl } from '../helpers/readLine';
import { FileController } from './file.controller';
import { UserController } from './user.controller';

export class QuestionController {
  constructor(
    private readonly userController: UserController,
    private readonly fileController: FileController,
  ) {}

  async askQuestions(index = 0, answers: string[] = []) {
    const questions = await this.fileController.getQuestions();

    if (index >= questions.length) {
      const [name, email, age, height] = answers;

      await this.userController.createUser({
        name,
        email,
        age,
        height,
      });

      return;
    }

    // Colorized the question to make it more readable
    const coloredQuestion = `${COLORS.green}${COLORS.bright}${questions[index]}${COLORS.reset}`;

    return new Promise<void>(resolve => {
      rl.question(`${coloredQuestion} `, async answer => {
        const result = answerSchema[index].safeParse(answer);

        if (!result.success) {
          console.log(
            `${COLORS.red}ERRO: ${result.error.errors[0].message} Tente novamente.${COLORS.reset}`,
          );
          await this.askQuestions(index, answers);
          resolve();
          return;
        }

        answers.push(answer);

        await this.askQuestions(index + 1, answers);
        resolve();
      });
    });
  }
}
