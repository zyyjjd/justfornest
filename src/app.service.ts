/*
 * @Date: 2023-04-13 15:35:27
 * @LastEditTime: 2023-04-17 10:36:10
 * @FilePath: /justfornest/src/app.service.ts
 * @Description:
 *
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Helsdfsdf lo n es t !';
  }
}
