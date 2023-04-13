import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

//主路径为app
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //1、固定路径：
  //可以匹配到get请求，http://localhost:3000/app/list
  @Get('list')
  getHello(): string {
    return this.appService.getHello();
  }

  //可以匹配到post请求，http://localhost:3000/app/list
  @Post('list')
  create(): string {
    return 'create';
  }

  //2、通配符路径（?+*三种通配符）
  //可以匹配到get请求，http://localhost:3000/app/user_xxx
  @Get('user_*')
  getUser(): string {
    return 'getUser';
  }
  //可以匹配到get请求，http://localhost:3000/app/user_xxx这是master分支

  //可以匹配到get请求，http://localhost:3000/app/user_xxx
  @Put('list/:id')
  update(): string {
    return `update`;
  }
}
