import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';

import swaggerConfig from '@/docs';

const routes = Router();

routes.use('/', serve, setup(swaggerConfig));

export { routes as swaggerRoutes };
