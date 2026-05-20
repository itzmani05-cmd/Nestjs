import {QueueEventsHost,QueueEventsListener,OnQueueEvent} from '@nestjs/bullmq';

@QueueEventsListener('audio')
export class AudioQueueEvents extends QueueEventsHost{
    @OnQueueEvent('active')
    onActive(job:{jobId:string}){
        console.log(`Job ${job.jobId} is active`);
    }

    @OnQueueEvent('completed')
    onCompleted(job:{jobId:string,returnvalue:any}){
        console.log(`Job ${job.jobId} completed`);
        console.log('Job Result:', job.returnvalue);
    }

    @OnQueueEvent('failed')
    onFailed(job:{jobId:string}){
        console.log(`Job ${job.jobId} failed`);
    }
}