/*
 * @Date: 2023-04-11 16:57:06
 * @LastEditTime: 2023-04-17 10:35:20
 * @FilePath: /justfornest/src/core/filter/http-exception/http-exception.filter.ts
 * @Description: 全局异常过滤器
 */
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // 获取请求上下文
    const response = ctx.getResponse(); // 获取请求上下文中的 response对象
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus(); // 获取异常状态码

    // 设置错误信息
    const message =
      exception.message ||
      `${status >= 500 ? 'Service Error' : 'Client Error'}`;

    // const errorResponse = {
    //   data: {},
    //   message: message,
    //   code: -1,
    // };

    // 设置返回的状态码， 请求头，发送错误信息
    response.status(status).json({
      data: message,
      time: new Date().getTime(),
      success: false,
      path: request.url,
      status,
    });
    // response.header('Content-Type', 'application/json; charset=utf-8');
    // response.send(errorResponse);
  }
}
