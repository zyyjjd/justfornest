/*
 * @Date: 2023-04-12 09:08:58
 * @LastEditTime: 2023-04-12 13:43:05
 * @FilePath: /justfornest/src/user/user.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
