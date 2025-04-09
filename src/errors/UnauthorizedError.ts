import { BaseError } from '@/errors';
import { HTTPStatus } from '@/helpers';

export class UnauthorizedError extends BaseError {
  constructor() {
    super(
      HTTPStatus.UNAUTHORIZED,
      'Invalid or missing credentials.',
      'UnauthorizedError'
    );
  }
}
