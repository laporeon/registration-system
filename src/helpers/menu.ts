import { QuestionController } from '../controllers/question.controller';
import { UserController } from '../controllers/user.controller';
import { rl } from '../helpers/constants';
import { User } from '../interfaces/User';
import { COLORS } from './colors';

export class MainMenu {
  private readonly userController: UserController;
  private readonly questionController: QuestionController;
  private exit: boolean = false;
  public users: User[] = [];

  constructor() {
    this.userController = new UserController();
    this.questionController = new QuestionController(this.userController);
  }

  display() {
    if (this.exit) return;

    console.log(`
      ***************************
      === SISTEMA DE CADASTRO ===
      ***************************

      1 - Cadastrar um usuário.
      2 - Listar usuários.
      3 - Buscar usuário por nome.
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
        case '3':
          const name = await this.getNameToSearchInput();
          await this.userController.getUserByName(name);
          this.showSecondaryMenu();
          break;
        case '0':
          console.log('\nAté mais!');
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

  async getNameToSearchInput(): Promise<string> {
    return new Promise(resolve => {
      rl.question('\nInforme o nome do usuário que deseja buscar: ', name => {
        resolve(name);
      });
    });
  }
}
