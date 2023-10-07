import { HttpStatus, HttpException } from '@nestjs/common';

export class ConflictException extends HttpException {
  constructor(message?: string) {
    super(message || 'CONFLICT', HttpStatus.CONFLICT);
  }
}
