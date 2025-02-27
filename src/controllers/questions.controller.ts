import { getFileContent } from '../helpers/fileReader';
import { rl } from '../helpers/readLine';
import { saveUserData } from '../helpers/saveUserData';

enum COLORS {
  reset = '\x1b[0m',
  bright = '\x1b[1m',
  green = '\x1b[32m',
}

class QuestionController {
  private answers: string[] = [];

  async askQuestions(questions: string[], index = 0) {
    if (index >= questions.length) {
      rl.close();

      const [name, email, age, height] = this.answers;

      await saveUserData({
        name,
        email,
        age: parseInt(age),
        height: parseInt(height),
      });

      return;
    }

    // Colorized the question to make it more readable
    const coloredQuestion = `${COLORS.green}${COLORS.bright}${questions[index]}${COLORS.reset}`;

    rl.question(`${coloredQuestion} `, answer => {
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
