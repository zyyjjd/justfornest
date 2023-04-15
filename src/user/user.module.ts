/*
 * @Date: 2023-04-15 10:36:24
 * @LastEditTime: 2023-04-15 13:29:28
 * @FilePath: /justfornest/src/user/user.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //引入实体
  controllers: [UserController],
  providers: [
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
export class UserModule {}
