import { Test, TestingModule } from '@nestjs/testing';
import { EventsEmitterController } from './events-emitter.controller';

describe('EventsEmitterController', () => {
  let controller: EventsEmitterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventsEmitterController],
    }).compile();

    controller = module.get<EventsEmitterController>(EventsEmitterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
