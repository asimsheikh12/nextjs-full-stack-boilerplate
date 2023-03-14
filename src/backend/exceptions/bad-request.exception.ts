import { HttpMessage, HttpStatus } from '@/backend/constants';

import { HttpException } from './http.exception';

export class BadRequestException extends HttpException {
  public message: string;

  public status: number = HttpStatus.BAD_REQUEST;

  constructor(message: string, status?: number) {
    super(message, status!);
    this.status = status || HttpStatus.BAD_REQUEST;
    this.message = message || HttpMessage.BAD_REQUEST;
    Error.captureStackTrace(this, this.constructor);
  }
}
