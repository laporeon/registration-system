import { HTTPStatus } from '@helpers/httpStatus';

import { AppError } from './AppError';

export class NotFoundError extends AppError {
  constructor() {
    super(HTTPStatus.NOT_FOUND, 'Resource Not Found', 'NotFoundError');
  }
}
