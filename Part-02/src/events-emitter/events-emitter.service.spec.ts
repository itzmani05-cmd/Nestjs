import { Test, TestingModule } from '@nestjs/testing';
import { EventsEmitterService } from './events-emitter.service';

describe('EventsEmitterService', () => {
  let service: EventsEmitterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsEmitterService],
    }).compile();

    service = module.get<EventsEmitterService>(EventsEmitterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
