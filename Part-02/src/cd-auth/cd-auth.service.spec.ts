import { Test, TestingModule } from '@nestjs/testing';
import { CdAuthService } from './cd-auth.service';

describe('CdAuthService', () => {
  let service: CdAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdAuthService],
    }).compile();

    service = module.get<CdAuthService>(CdAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
