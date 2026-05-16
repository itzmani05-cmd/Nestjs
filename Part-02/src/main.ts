import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConsoleLogger} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    // logger:false // When we declare flase for logger then it doesn't log in the terminal
    // logger:['error','warn'] // When we assign the value with in the array, then it log that particular value log.
    // logger:new ConsoleLogger({
    //   json:true, // for log like {"level":"log","pid":16260,"timestamp":1778906143842,"message":"Starting Nest application...","context":"NestFactory"}
    //   timestamp:true
    // })
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
