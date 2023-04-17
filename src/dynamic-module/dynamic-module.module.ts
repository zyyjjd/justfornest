/*
 * @Date: 2023-04-15 16:18:32
 * @LastEditTime: 2023-04-15 16:25:10
 * @FilePath: /justfornest/src/dynamic-module/dynamic-module.module.ts
 * @Description:
 *
 */
import { DynamicModule, Global, Module } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';
import { DynamicModuleController } from './dynamic-module.controller';

@Global()
@Module({
  controllers: [DynamicModuleController],
  providers: [DynamicModuleService],
})
export class DynamicModuleModule {
  static forRoot(option: string): DynamicModule {
    return {
      module: DynamicModuleModule,
      providers: [
        {
          provide: 'dynamic',
          useValue: { shopName: `${option}的店铺` },
        },
      ],
      exports: [
        {
          provide: 'dynamic',
          useValue: { shopName: `${option}的店铺` },
        },
      ],
    };
  }
}
