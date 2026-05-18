import { Test, TestingModule } from '@nestjs/testing';
import { DynamicModuleController } from './dynamic-module.controller';

describe('DynamicModuleController', () => {
  let controller: DynamicModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicModuleController],
    }).compile();

    controller = module.get<DynamicModuleController>(DynamicModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
