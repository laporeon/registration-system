import { HTTPStatus } from '@helpers/httpStatus';

import { AppError } from './AppError';

export class InvalidRequiredField extends AppError {
  constructor() {
    super(HTTPStatus.BAD_REQUEST, 'Invalid ID.', 'InvalidRequiredField');
  }
}
