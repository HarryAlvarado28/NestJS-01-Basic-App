import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'GET Hello World!';
  }
  postHello(): string {
    return 'POST Hello World!';
  }
  putHello(): string {
    return 'PUT Hello World!';
  }
  deleteHello(): string {
    return 'DELETE Hello World!';
  }
}
