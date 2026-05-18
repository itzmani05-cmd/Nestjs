import { Controller,Get } from '@nestjs/common';
import { EventsEmitterService } from './events-emitter.service';

@Controller('events-emitter')
export class EventsEmitterController {
    constructor(private eventService:EventsEmitterService){}
    @Get()
    createUser(){
        return this.eventService.createUser();
    }
}
