/* eslint-disable no-param-reassign */
import type { NextApiRequest, NextApiResponse } from 'next';

import { config } from '@/backend/config';
import { ErrorMessage, HttpMessage, HttpStatus } from '@/backend/constants';
import {
  BadRequestException,
  UnauthorizedException,
} from '@/backend/exceptions';

const handleCastErrorDB = (err: any): BadRequestException => {
  const message = `Invalid ${err?.path}: ${err?.value}.`;
  return new BadRequestException(message);
};

const handleDuplicateFieldsDB = (err: any): BadRequestException => {
  const value = err?.message?.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new BadRequestException(message);
};

const handleValidationErrorDB = (err: any): BadRequestException => {
  const errors = Object.values(err?.errors)?.map((el: any) => el?.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new BadRequestException(message);
};

const handleJWTError = (err: any): UnauthorizedException => {
  const error = { ...err, message: ErrorMessage.INVALID_TOKEN };
  return new UnauthorizedException(error?.message);
};

const handleJWTExpiredError = (err: any): UnauthorizedException => {
  const error = { ...err, message: ErrorMessage.TOKEN_EXPIRED };
  return new UnauthorizedException(error?.message);
};

const sendError = (err: any, req: NextApiRequest, res: NextApiResponse) => {
  err.status = err?.status || HttpStatus.INTERNAL_SERVER_ERROR;
  err.message = err?.message || HttpMessage.INTERNAL_SERVER_ERROR;
  if (config.isDevelopment) {
    console.error('Error 💥', {
      status: err?.status,
      method: req.method,
      path: req.url,
      timestamp: new Date(),
      message: err.message,
    });
  }
  return res.status(err.status).json({
    status: err.status,
    message: err.message,
  });
};

const onError = (
  error: any,
  req: NextApiRequest,
  res: NextApiResponse,
  next: any
): void => {
  try {
    if (error?.name === 'CastError') error = handleCastErrorDB(error);
    if (error?.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error?.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error?.name === 'JsonWebTokenError') error = handleJWTError(error);
    if (error?.name === 'TokenExpiredError')
      error = handleJWTExpiredError(error);
    return sendError(error, req, res);
  } catch (err) {
    return next(err);
  }
};

export const errorMiddleware = {
  onError,
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      message: `Can't find ${req?.url} on this server!`,
    });
  },
};
