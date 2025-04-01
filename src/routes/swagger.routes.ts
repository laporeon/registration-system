import swaggerConfig from 'docs';
import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';

const routes = Router();

routes.use('/', serve, setup(swaggerConfig));

export { routes as swaggerRoutes };
