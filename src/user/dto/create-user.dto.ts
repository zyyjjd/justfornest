/*
 * @Date: 2023-04-12 09:08:58
 * @LastEditTime: 2023-04-12 13:46:03
 * @FilePath: /justfornest/src/user/dto/create-user.dto.ts
 * @Description: 用户数据传输对象
 *
 */
export class CreateUserDto {
  readonly id: number;
  readonly userName: string;
  readonly userPassword: string;
  readonly create_time: Date;
  readonly update_time: Date;
}
