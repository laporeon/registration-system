import { AppError } from '@/errors';
import { HTTPStatus } from '@/helpers';

export class AlreadyRegisteredError extends AppError {
  constructor() {
    super(
      HTTPStatus.CONFLICT,
      'Email already registered.',
      'AlreadyRegisteredError',
    );
  }
}
