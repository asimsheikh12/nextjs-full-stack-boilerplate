import { HttpMessage, HttpStatus } from '@/backend/constants';

import { HttpException } from './http.exception';

export class UnauthorizedException extends HttpException {
  public message: string;

  public status: number = HttpStatus.UNAUTHORIZED;

  constructor(message: string, status?: number) {
    super(message, status!);
    this.status = status || HttpStatus.UNAUTHORIZED;
    this.message = message || HttpMessage.UNAUTHORIZED;
    Error.captureStackTrace(this, this.constructor);
  }
}
