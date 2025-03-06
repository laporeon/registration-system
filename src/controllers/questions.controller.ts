import { FilesController } from '../controllers/files.controller';
import { answerSchema } from '../helpers/answerSchema';
import { COLORS } from '../helpers/colors';
import { rl } from '../helpers/readLine';
import { UserController } from './users.controller';

export class QuestionController {
  constructor(
    private readonly userController: UserController,
    private readonly filesController: FilesController,
  ) {}

  async askQuestions(index = 0, answers: string[] = []) {
    const questions = await this.filesController.getQuestions();

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
