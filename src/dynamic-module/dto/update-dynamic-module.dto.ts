/*
 * @Date: 2023-04-15 16:18:32
 * @LastEditTime: 2023-04-17 10:40:49
 * @FilePath: /justfornest/src/dynamic-module/dto/update-dynamic-module.dto.ts
 * @Description:
 *
 */
import { PartialType } from '@nestjs/swagger';
import { CreateDynamicModuleDto } from './create-dynamic-module.dto';

export class UpdateDynamicModuleDto extends PartialType(
  CreateDynamicModuleDto,
) {}
