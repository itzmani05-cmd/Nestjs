import { Test, TestingModule } from '@nestjs/testing';
import { InjectionScopeController } from './injection-scope.controller';

describe('InjectionScopeController', () => {
  let controller: InjectionScopeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InjectionScopeController],
    }).compile();

    controller = module.get<InjectionScopeController>(InjectionScopeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
