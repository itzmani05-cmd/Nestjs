import {OnWorkerEvent, Processor, WorkerHost} from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('audio')
export class QueuesConsumer extends WorkerHost{
    
    async process(job:Job<any,any,string>): Promise<any>{
        return this.transcode(job);
        // console.log('Processing Job:', job.name);
        // console.log('Job Data:', job.data);

        // switch(job.name){//when we have multiple job types in the same queue then we use switch case for handling the process of the job
        //     case 'transcode':
        //         return await this.transcode(job);
        //     case 'concatenate':
        //         return await this.concatenate(job);
        //     default:
        //         console.log('Unknown job type');
        //         return null;
        // }
    }

    async transcode(job:Job){
        let progress=0;
        for(let i=0;i<10;i++){
            await new Promise((resolve)=>setTimeout(resolve,1000));
            progress+=10;
            await job.updateProgress(progress);
            console.log(`Transcoding progress: ${progress}%`);
        }
        return {
            message:'Audio transcoding completed',
        };
    }
    // async concatenate(job:Job){
    //     console.log('Concatenating audio...');
    //     return{
    //         message:'Audio concatenation completed',
    //     }
    // }   
    
    @OnWorkerEvent('active')
    onActive(job:Job){
        console.log('Job Active');
    }

    // @OnWorkerEvent('completed')
    // onCompleted(job:Job){
    //     console.log('Job Completed');
    //     console.log('Job Result:', job.returnvalue);
    // }

    @OnWorkerEvent('failed')
    onFailed(job:Job,err:Error){
        console.log('Job Failed');
        console.log('Job Error:', job.failedReason);
        console.log(`Job failed:,${err.message}`);
    }

    @OnWorkerEvent('progress')
    onProgress(job:Job){
        console.log(`Job Progress: ${job.progress}%`);
    }
}