import { Controller,Get } from '@nestjs/common';
import { QueuesService } from './queues.service';

@Controller('queues')
export class QueuesController {
    constructor(private readonly queuesService:QueuesService){}
    @Get()
    addQueueJob(){
        return this.queuesService.addJob();
    }
     @Get('pause')
    pauseQueue() {
        return this.queuesService.pauseQueue();
    }

    @Get('resume')
    resumeQueue() {
        return this.queuesService.resumeQueue();
    }

    @Get('count')
    getCounts() {
        return this.queuesService.getJobCounts();
    }

    @Get('clear')
    clearQueue() {
        return this.queuesService.clearQueue();
    }
}
