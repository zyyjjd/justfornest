/*
 * @Date: 2023-04-13 15:32:46
 * @LastEditTime: 2023-04-13 15:33:36
 * @FilePath: /justfornest/src/app.controller.ts
 * @Description: 测试nest
 *
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
