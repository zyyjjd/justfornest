import { Test, TestingModule } from '@nestjs/testing';
import { GlobalModuleService } from './global-module.service';

describe('GlobalModuleService', () => {
  let service: GlobalModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalModuleService],
    }).compile();

    service = module.get<GlobalModuleService>(GlobalModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
