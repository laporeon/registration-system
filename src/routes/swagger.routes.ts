import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';

import { swagger } from '@/docs/swagger';

const routes = Router();

const options = {
  swaggerOptions: {
    defaultModelsExpandDepth: -1,
    defaultModelExpandDepth: -1,
  },
};

routes.use('/', serve, setup(swagger, options));

export { routes as swaggerRoutes };
