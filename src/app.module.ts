/*
 * @Date: 2023-04-11 13:30:05
 * @LastEditTime: 2023-04-17 10:35:38
 * @FilePath: /justfornest/src/app.module.ts
 * @Description:
 *
 */
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { InfoModule } from './info/info.module';
import { GlobalModuleModule } from './global-module/global-module.module';
import { DynamicModuleModule } from './dynamic-module/dynamic-module.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //数据库类型
      host: '127.0.0.1', //数据库的连接地址host
      port: 3306, //数据库的连接端口port
      username: 'root', //连接账号
      password: 'zyyily520fe', //连接密码
      database: 'blog', //连接的数据库表名
      // entities: [PostsEntity, User], //数据库表实体
      retryDelay: 3000, //重试连接数据库时间间隔
      retryAttempts: 10, //重试连接数据库次数
      synchronize: true, //自动同步实体到数据库表
      autoLoadEntities: true, //自动加载实体配置，forFeature()注册的每个实体都自动加载
    }),
    PostsModule,
    UserModule,
    InfoModule,
    GlobalModuleModule,
    DynamicModuleModule.forRoot('我是动态模块的配置'),
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
