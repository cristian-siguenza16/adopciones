import Joi from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    return 'Hello World!';
  }

  getMessage(): string{
    return this.configService.get('MESSAGE');
  }
}
