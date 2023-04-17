import { Test, TestingModule } from '@nestjs/testing';
import { GlobalModuleController } from './global-module.controller';
import { GlobalModuleService } from './global-module.service';

describe('GlobalModuleController', () => {
  let controller: GlobalModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlobalModuleController],
      providers: [GlobalModuleService],
    }).compile();

    controller = module.get<GlobalModuleController>(GlobalModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
