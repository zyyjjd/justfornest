/*
 * @Date: 2023-04-15 10:36:24
 * @LastEditTime: 2023-04-15 13:47:07
 * @FilePath: /justfornest/src/user/entities/user.entity.ts
 * @Description:
 *
 */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  userName: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  userPassword: string;

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;
}
