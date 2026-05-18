import { Test, TestingModule } from '@nestjs/testing';
import { HttpcookiesController } from './httpcookies.controller';

describe('HttpcookiesController', () => {
  let controller: HttpcookiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpcookiesController],
    }).compile();

    controller = module.get<HttpcookiesController>(HttpcookiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
