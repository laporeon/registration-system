import { AppError } from '@/errors';
import { HTTPStatus } from '@/helpers';

export class NotFoundError extends AppError {
  constructor() {
    super(HTTPStatus.NOT_FOUND, 'Resource Not Found', 'NotFoundError');
  }
}
