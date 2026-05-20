import { Module } from '@nestjs/common';
import { HashingController } from './hashing.controller';
import { HashingService } from './hashing.service';

@Module({
  controllers: [HashingController],
  providers: [HashingService]
})
export class HashingModule {}
