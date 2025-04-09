import { BaseError } from '@/errors';
import { HTTPStatus } from '@/helpers';

export class AlreadyRegisteredError extends BaseError {
  constructor() {
    super(
      HTTPStatus.CONFLICT,
      'Email already registered.',
      'AlreadyRegisteredError'
    );
  }
}
