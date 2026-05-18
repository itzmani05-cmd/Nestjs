import { Test, TestingModule } from '@nestjs/testing';
import { InjectionScopeService } from './injection-scope.service';

describe('InjectionScopeService', () => {
  let service: InjectionScopeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InjectionScopeService],
    }).compile();

    service = module.get<InjectionScopeService>(InjectionScopeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
