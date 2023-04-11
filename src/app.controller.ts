import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
