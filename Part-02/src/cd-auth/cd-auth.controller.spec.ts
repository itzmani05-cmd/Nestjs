import { Test, TestingModule } from '@nestjs/testing';
import { CdAuthController } from './cd-auth.controller';

describe('CdAuthController', () => {
  let controller: CdAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdAuthController],
    }).compile();

    controller = module.get<CdAuthController>(CdAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
