import { HttpMessage, HttpStatus } from '@/backend/constants';

import { HttpException } from './http.exception';

export class NotFoundException extends HttpException {
  public message: string;

  public status: number = HttpStatus.NOT_FOUND;

  constructor(message: string, status?: number) {
    super(message, status!);
    this.status = status || HttpStatus.NOT_FOUND;
    this.message = message || HttpMessage.NOT_FOUND;
    Error.captureStackTrace(this, this.constructor);
  }
}
