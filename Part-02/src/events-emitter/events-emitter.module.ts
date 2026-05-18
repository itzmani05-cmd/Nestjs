import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventsEmitterController } from './events-emitter.controller';
import { EventsEmitterService } from './events-emitter.service';
import { UserListener } from './user.listener';

@Module({
  imports:[EventEmitterModule.forRoot()],
  controllers: [EventsEmitterController],
  providers: [EventsEmitterService,UserListener]
})
export class EventsEmitterModule {}
