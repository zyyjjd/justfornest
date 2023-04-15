/*
 * @Date: 2023-04-15 10:36:24
 * @LastEditTime: 2023-04-15 13:33:26
 * @FilePath: /justfornest/src/user/user.controller.ts
 * @Description:
 *
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  // constructor(private readonly userService: UserService) {}
  // 2. 通过构造函数依赖注入,注入的‘user’是在user.module.ts中定义的
  constructor(
    @Inject('user') private user: UserService,
    @Inject('girlArray') private girl: string[],
    @Inject('MyFactory') private factory: string,
  ) {}

  //增加一个用户
  @Post('/add')
  addUser(@Body() Body) {
    console.log(Body, 'body');
    return this.user.addUser();
  }

  @Get('/test')
  test() {
    console.log(this.factory);
    return this.girl;
  }

  //删除一个用户
  @Delete('/delete/:id')
  delteUser(@Param('id') id: string) {
    return this.user.delteUser(id);
  }

  //修改一个用户
  @Post('/update/:id')
  updateUser(@Param('id') id: string) {
    return this.user.updateUser(+id);
  }

  //查询所有用户
  @Get()
  findAll() {
    return this.user.findAll();
  }

  //根据姓名查找一个用户
  @Post('/find')
  findByName(@Body('name') name: string) {
    return this.user.findByName(name);
  }
}
