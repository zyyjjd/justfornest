/*
 * @Date: 2023-04-13 15:35:27
 * @LastEditTime: 2023-04-15 10:19:53
 * @FilePath: /justfornest/src/main.ts
 * @Description:
 *
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); //设置全局前缀
  app.useGlobalFilters(new HttpExceptionFilter()); //设置全局异常过滤器
  app.useGlobalInterceptors(new TransformInterceptor()); //设置全局拦截器

  //配置swagger
  const options = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3080);
}
bootstrap();
