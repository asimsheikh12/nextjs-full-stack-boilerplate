import { HttpMessage, HttpStatus } from '@/backend/constants';

import { HttpException } from './http.exception';

export class ConflictException extends HttpException {
  public message: string;

  public status: number = HttpStatus.CONFLICT;

  constructor(message: string, status?: number) {
    super(message, status!);
    this.status = status || HttpStatus.CONFLICT;
    this.message = message || HttpMessage.CONFLICT;
    Error.captureStackTrace(this, this.constructor);
  }
}
