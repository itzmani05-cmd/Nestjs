import { Test, TestingModule } from '@nestjs/testing';
import { CdUserService } from './cd-user.service';

describe('CdUserService', () => {
  let service: CdUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdUserService],
    }).compile();

    service = module.get<CdUserService>(CdUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
