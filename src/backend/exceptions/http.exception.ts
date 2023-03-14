import { HttpMessage, HttpStatus } from '@/backend/constants';

export class HttpException extends Error {
  public message: string = HttpMessage.INTERNAL_SERVER_ERROR;

  public status: number = HttpStatus.INTERNAL_SERVER_ERROR;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}
