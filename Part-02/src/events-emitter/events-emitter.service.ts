import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
@Injectable()
export class EventsEmitterService {
    constructor(private eventEmitter:EventEmitter2){}
    createUser(){
        console.log('User Created');
        this.eventEmitter.emit('user.created',{
            name:'Manikandan',
            email:'mani@gmail.com'
        });
        return 'User Created';
    }
}
