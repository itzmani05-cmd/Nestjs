import { Module } from '@nestjs/common';
import {BullModule} from '@nestjs/bullmq';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from '../../auth/auth.module';
import { UsersModule } from './users/users.module';
import { HashingModule } from './hashing/hashing.module';
import { QueuesModule } from './queues/queues.module';


@Module({
  imports: [ BullModule.forRoot({connection:{
    host:'redis-15391.crce276.ap-south-1-3.ec2.cloud.redislabs.com',port:15391,username:'default',password:'8YEn1ylKcxF1SavZwZimN2f2XrpO2NpC'
  }}),UsersModule, HashingModule, QueuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
