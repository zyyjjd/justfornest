/*
 * @Date: 2023-04-17 09:31:37
 * @LastEditTime: 2023-04-17 09:58:12
 * @FilePath: /justfornest/src/common/response.ts
 * @Description:格式化响应数据
 *
 */
import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface data<T> {
  data: T;
}

@Injectable()
export class Response<T = any> implements NestInterceptor {
  intercept(
    context: ExecutionContext, //当前请求的执行上下文
    next: CallHandler<any>, //请求处理链中的下一个处理器
  ): Observable<data<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          status: 0,
          success: true,
          message: '牛逼',
        };
      }),
    );
  }
}
