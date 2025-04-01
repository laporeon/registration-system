import { AppError } from '@/errors';
import { HTTPStatus } from '@/helpers';

export class InvalidRequiredField extends AppError {
  constructor() {
    super(HTTPStatus.BAD_REQUEST, 'Invalid ID.', 'InvalidRequiredField');
  }
}
