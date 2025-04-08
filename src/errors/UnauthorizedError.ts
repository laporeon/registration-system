import { AppError } from '@/errors';
import { HTTPStatus } from '@/helpers';

export class UnauthorizedError extends AppError {
  constructor() {
    super(
      HTTPStatus.UNAUTHORIZED,
      'Invalid or missing credentials.',
      'UnauthorizedError'
    );
  }
}
