import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import {Queue} from 'bullmq';

@Injectable()
export class QueuesService {
    constructor(
        @InjectQueue('audio')
        private readonly audioQueue:Queue
    ){}
    async addJob(){
        await this.audioQueue.add('transcode',{
            file:'audio.mp3'
        });

        return{
            message:"Job added successfully"
        };
    }

    async pauseQueue(){
        await this.audioQueue.pause();
        return{
            message:'Queue paused successfully'
        }
    }

    async resumeQueue(){
        await this.audioQueue.resume();
        return{
            message:'Queue resumed successfully'
        }
    }

    async getJobCounts(){
        const counts=await this.audioQueue.getJobCounts();
        return {
            message:"Queue job counts",
            counts
        };
    }

    async clearQueue() {
        await this.audioQueue.drain(); //this clears the waiting job
        return {
            message: 'Queue cleared successfully',
        }
    }
}
