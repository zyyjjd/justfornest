/*
 * @Date: 2023-04-15 14:16:17
 * @LastEditTime: 2023-04-15 14:38:29
 * @FilePath: /justfornest/src/counter/counter.middleware.ts
 * @Description:
 *
 */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('进入user的局部中间件');
    next();
  }
}
