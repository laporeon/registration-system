import { FileController } from '../controllers/file.controller';
import { QuestionController } from '../controllers/question.controller';
import { UserController } from '../controllers/user.controller';
import { rl } from '../helpers/readLine';
import { User } from '../interfaces/User';
import { COLORS } from './colors';

export class MainMenu {
  private readonly userController: UserController;
  private readonly questionController: QuestionController;
  private readonly fileController: FileController;
  private exit: boolean = false;
  public users: User[] = [];

  constructor() {
    this.fileController = new FileController();
    this.userController = new UserController(this.fileController);
    this.questionController = new QuestionController(
      this.userController,
      this.fileController,
    );
  }

  display() {
    if (this.exit) return;

    console.log(`
      ***************************
      === SISTEMA DE CADASTRO ===
      ***************************

      1 - Cadastrar um usuário.
      2 - Listar usuários.
      0 - Sair\n
    `);

    this.askOption();
  }

  askOption() {
    const coloredQuestion = `${COLORS.green}${COLORS.bright}Digite uma opção: ${COLORS.reset}`;

    rl.question(`${coloredQuestion}`, async option => {
      switch (option.trim()) {
        case '1':
          await this.questionController.askQuestions();
          this.showSecondaryMenu();
          break;
        case '2':
          await this.userController.listUsers();
          this.showSecondaryMenu();
          break;
        case '0':
          console.log('Até mais!');
          this.exit = true;
          rl.close();
          return;
        default:
          console.log('Opção inválida, tente novamente.\n');
          this.askOption();
          break;
      }
    });
  }

  showSecondaryMenu() {
    rl.question(
      `\nDigite 1 para voltar ao menu inicial ou 0 para encerrar: `,
      option => {
        switch (option.trim()) {
          case '1':
            this.display();
            break;

          case '0':
            console.log('\nAté mais!');
            this.exit = true;
            rl.close();
            return;
          default:
            console.log('Opção inválida, tente novamente.');
            this.showSecondaryMenu();
            break;
        }
      },
    );
  }
}
