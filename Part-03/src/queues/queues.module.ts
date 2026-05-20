import { Module } from '@nestjs/common';
import {BullModule} from '@nestjs/bullmq';
import { QueuesController } from './queues.controller';
import { QueuesService } from './queues.service';
import {QueuesConsumer} from './queues.consumer'; 
import { AudioQueueEvents } from './audio.events';

@Module({
  imports:[BullModule.registerQueue({
    name:'audio',
  })],
  controllers: [QueuesController],
  providers: [QueuesService,QueuesConsumer,AudioQueueEvents]
})
export class QueuesModule {}

//OnWorkerEvent() 
//This is placed inside the consumer
//Best when - Logging Processing, Progress Tracking, 

//OnQueueEvent()
//This is placed inside the event listener
//Best when - Monitoring, Alerting, Analytics, Notifications, Queue Tracking
