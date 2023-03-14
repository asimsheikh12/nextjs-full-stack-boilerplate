import { HttpMessage, HttpStatus } from '@/backend/constants';

import { HttpException } from './http.exception';

export class ForbiddenException extends HttpException {
  public message: string;

  public status: number = HttpStatus.FORBIDDEN;

  constructor(message: string, status?: number) {
    super(message, status!);
    this.status = status || HttpStatus.FORBIDDEN;
    this.message = message || HttpMessage.FORBIDDEN;
    Error.captureStackTrace(this, this.constructor);
  }
}
