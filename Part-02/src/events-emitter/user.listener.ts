import {Injectable} from '@nestjs/common';
import {OnEvent} from '@nestjs/event-emitter';

@Injectable()
export class UserListener{
    @OnEvent('user.created')
    handleUserCreated(payload:any){
        console.log('Event Triggered');
        console.log(payload);
        console.log('Sending Welcome Email');
    }
}