import { PartialType } from '@nestjs/swagger';
import { CreateGlobalModuleDto } from './create-global-module.dto';

export class UpdateGlobalModuleDto extends PartialType(CreateGlobalModuleDto) {}
