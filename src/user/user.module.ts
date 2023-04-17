/*
 * @Date: 2023-04-15 10:36:24
 * @LastEditTime: 2023-04-15 15:48:25
 * @FilePath: /justfornest/src/user/user.module.ts
 * @Description:
 *
 */
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CounterMiddleware } from 'src/counter/counter.middleware';
import { InfoService } from 'src/info/info.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //引入实体
  controllers: [UserController],
  providers: [
    InfoService,
    {
      provide: 'user', //这里的user是自定义的，可以随便写
      useClass: UserService, //这里的UserService是上面的service
    },
    {
      provide: 'girlArray',
      useValue: ['小红', '小花', '小明'],
    },
    {
      provide: 'MyFactory',
      useFactory: () => {
        return '我是工厂函数返回的值';
      },
    },
  ],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CounterMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.GET });
  }
}
