import { Test, TestingModule } from '@nestjs/testing';
import { CdUserController } from './cd-user.controller';

describe('CdUserController', () => {
  let controller: CdUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CdUserController],
    }).compile();

    controller = module.get<CdUserController>(CdUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
