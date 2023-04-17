/*
 * @Date: 2023-04-13 15:35:27
 * @LastEditTime: 2023-04-17 10:36:06
 * @FilePath: /justfornest/src/main.ts
 * @Description:
 *
 */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
import { Response } from './common/response';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { globalMiddleware } from './global';
import * as cors from 'cors';
import { join } from 'path';
import { HttpFilter } from './common/filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors());
  app.setGlobalPrefix('api'); //设置全局前缀
  app.useGlobalFilters(new HttpExceptionFilter()); //设置全局异常过滤器
  // app.useGlobalInterceptors(new TransformInterceptor()); //设置全局拦截器
  // app.useGlobalInterceptors(new HttpFilter());
  app.useGlobalInterceptors(new Response()); //全局响应拦截器
  app.use(globalMiddleware); //设置全局中间件
  app.useStaticAssets(join(__dirname, 'images'), { prefix: '/jjd' }); //设置静态资源目录
  //配置swagger
  const options = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  // if (module.hot) {
  //   module.hot.accept();
  //   module.hot.dispose(() => app.close());
  // }

  await app.listen(3080);
}
bootstrap();
