/*
 * @Date: 2023-04-15 15:45:12
 * @LastEditTime: 2023-04-15 17:10:54
 * @FilePath: /justfornest/src/info/info.module.ts
 * @Description:
 *
 */
import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';

@Module({
  controllers: [InfoController],
  providers: [InfoService],
  exports: [InfoService],
})
export class InfoModule {}
