import { answerSchema } from '../helpers/answerSchema';
import { COLORS } from '../helpers/colors';
import { getFileContent } from '../helpers/fileReader';
import { rl } from '../helpers/readLine';
import { saveUserData } from '../helpers/saveUserData';

class QuestionController {
  private answers: string[] = [];

  async askQuestions(questions: string[], index = 0) {
    if (index >= questions.length) {
      rl.close();

      const [name, email, age, height] = this.answers;

      await saveUserData({
        name,
        email,
        age,
        height,
      });

      return;
    }

    // Colorized the question to make it more readable
    const coloredQuestion = `${COLORS.green}${COLORS.bright}${questions[index]}${COLORS.reset}`;

    rl.question(`${coloredQuestion} `, answer => {
      const result = answerSchema[index].safeParse(answer);

      if (result.error) {
        console.log(
          `${COLORS.red}ERRO: ${result.error.errors[0].message} Tente novamente.${COLORS.reset}`,
        );
        return this.askQuestions(questions, index);
      }

      this.answers.push(answer);
      this.askQuestions(questions, index + 1);
    });
  }

  async start() {
    const questions = await getFileContent();

    this.askQuestions(questions);
  }
}

export default QuestionController;
