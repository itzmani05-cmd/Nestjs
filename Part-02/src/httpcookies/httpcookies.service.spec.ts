import { Test, TestingModule } from '@nestjs/testing';
import { HttpcookiesService } from './httpcookies.service';

describe('HttpcookiesService', () => {
  let service: HttpcookiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpcookiesService],
    }).compile();

    service = module.get<HttpcookiesService>(HttpcookiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
