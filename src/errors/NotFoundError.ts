import { BaseError } from '@/errors';
import { HTTPStatus } from '@/helpers';

export class NotFoundError extends BaseError {
  constructor() {
    super(HTTPStatus.NOT_FOUND, 'Resource Not Found', 'NotFoundError');
  }
}
