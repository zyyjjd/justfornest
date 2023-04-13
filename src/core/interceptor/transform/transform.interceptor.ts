/*
 * @Date: 2023-04-11 17:03:09
 * @LastEditTime: 2023-04-11 17:06:05
 * @FilePath: /justfornest/src/core/interceptor/transform/transform.interceptor.ts
 * @Description: 请求成功拦截器
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          code: 200,
          msg: '请求成功',
        };
      }),
    );
  }
}
