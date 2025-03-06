import { FilesController } from './controllers/files.controller';
import { QuestionController } from './controllers/questions.controller';
import { UserController } from './controllers/users.controller';
import { MainMenu } from './helpers/menu';

const filesController = new FilesController();
const userController = new UserController(filesController);
const questionController = new QuestionController(
  userController,
  filesController,
);
const menu = new MainMenu(userController, questionController);

menu.display();
