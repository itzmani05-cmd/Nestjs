import { Module } from '@nestjs/common';
import { CachingService } from './caching.service';
import {CacheModule} from '@nestjs/cache-manager';
import { CachingController } from './caching.controller';


@Module({
  imports:[CacheModule.register()],
  controllers:[CachingController],
  providers: [CachingService]
})
export class CachingModule {}
