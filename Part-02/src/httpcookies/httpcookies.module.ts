import { Module } from '@nestjs/common';
import { HttpcookiesController } from './httpcookies.controller';
import { HttpcookiesService } from './httpcookies.service';

@Module({
  controllers: [HttpcookiesController],
  providers: [HttpcookiesService]
})
export class HttpcookiesModule {}
