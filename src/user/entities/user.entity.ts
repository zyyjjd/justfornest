/*
 * @Date: 2023-04-12 09:08:58
 * @LastEditTime: 2023-04-12 13:42:20
 * @FilePath: /justfornest/src/user/entities/user.entity.ts
 * @Description:
 *
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  userPassword: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
}
