/*
 * @Date: 2023-04-11 13:30:05
 * @LastEditTime: 2023-04-15 10:40:20
 * @FilePath: /justfornest/src/app.module.ts
 * @Description:
 *
 */
import { ConfigService, ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import envConfig from '../config/env';
import { PostsEntity } from './posts/posts.entity';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true, // 设置为全局
//       envFilePath: [envConfig.path],
//     }),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         type: 'mysql', // 数据库类型
//         entities: [PostsEntity, User], // 数据表实体
//         host: configService.get('DB_HOST', 'localhost'), // 主机，默认为localhost
//         port: configService.get<number>('DB_PORT', 3306), // 端口号
//         username: configService.get('DB_USER', 'root'), // 用户名
//         password: configService.get('DB_PASSWORD', 'zyyily520fe'), // 密码
//         database: configService.get('DB_DATABASE', 'blog'), //数据库名
//         timezone: '+08:00', //服务器上配置的时区
//         synchronize: false, //根据实体自动创建数据库表， 生产环境建议关闭
//       }),
//     }),
//     PostsModule,
//     UserModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

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
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
