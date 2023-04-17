/*
 * @Date: 2023-04-15 10:36:24
 * @LastEditTime: 2023-04-15 13:48:10
 * @FilePath: /justfornest/src/user/dto/update-user.dto.ts
 * @Description:
 *
 */
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
