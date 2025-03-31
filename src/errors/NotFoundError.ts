import { HTTPStatus } from '@helpers/index';

import { AppError } from './AppError';

export class NotFoundError extends AppError {
  constructor() {
    super(HTTPStatus.NOT_FOUND, 'Resource Not Found', 'NotFoundError');
  }
}
