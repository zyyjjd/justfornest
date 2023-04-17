/*
 * @Date: 2023-04-15 16:06:40
 * @LastEditTime: 2023-04-15 16:07:07
 * @FilePath: /justfornest/src/global-module/global-module.module.ts
 * @Description:
 *
 */
import { Global, Module } from '@nestjs/common';
import { GlobalModuleService } from './global-module.service';
import { GlobalModuleController } from './global-module.controller';

@Global()
@Module({
  controllers: [GlobalModuleController],
  providers: [GlobalModuleService],
  exports: [GlobalModuleService],
})
export class GlobalModuleModule {}
