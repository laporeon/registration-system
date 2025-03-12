import { QuestionController } from '../controllers/question.controller';
import { UserController } from '../controllers/user.controller';
import { rl } from '../helpers/constants';
import { COLORS } from './colors';

export class MainMenu {
  private exit: boolean = false;

  constructor(
    private readonly userController: UserController = new UserController(),
    private readonly questionController: QuestionController = new QuestionController(
      userController,
    ),
  ) {}

  async display() {
    while (!this.exit) {
      console.log(`
        ***************************
        === SISTEMA DE CADASTRO ===
        ***************************

        1 - Cadastrar um usuário.
        2 - Listar usuários.
        3 - Buscar usuário por nome.
        4 - Cadastrar uma nova pergunta.
        5 - Deletar uma pergunta.
        0 - Sair\n
      `);

      await this.askOption();
    }
  }

  async askOption() {
    const option = await this.renderReadline(
      `${COLORS.green}${COLORS.bright}Digite uma opção: ${COLORS.reset}`,
    );

    switch (option.trim()) {
      case '1':
        await this.questionController.askQuestions();
        break;
      case '2':
        await this.userController.listUsers();
        break;
      case '3':
        const name = await this.renderReadline(
          'Digite o nome do usuário que deseja buscar: ',
        );
        await this.userController.getUserByName(name);
        break;
      case '4':
        const question = await this.renderReadline(
          'Digite a pergunta que deseja adicionar: ',
        );
        await this.questionController.createQuestion(question);
        break;
      case '5':
        const questionId = await this.renderReadline(
          'Digite o ID da pergunta que deseja remover: ',
        );
        await this.questionController.deleteQuestion(questionId);
        break;
      case '0':
        this.exit = true;
        rl.close();
        console.log('\nAté mais!');
        return;
      default:
        console.log('Opção inválida. Tente novamente.\n');
        break;
    }

    const continueOption = await this.renderReadline(
      '\nDigite 1 para voltar ao menu inicial ou 0 para encerrar: ',
    );
    if (continueOption.trim() === '0') {
      this.exit = true;
      rl.close();
      console.log('\nAté mais!');
    }
  }

  async renderReadline(message: string): Promise<string> {
    return new Promise(resolve => rl.question(message, resolve));
  }
}
