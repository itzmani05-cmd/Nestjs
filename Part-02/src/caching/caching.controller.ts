import { Controller,Get } from '@nestjs/common';
import { CachingService } from './caching.service';

@Controller('caching')
export class CachingController {
    constructor(private cachingService:CachingService){}
    @Get('set')
    setCache(){
        return this.cachingService.setCache();
    }

    @Get('get')
    getCache(){
        return this.cachingService.getCache();
    }

    @Get('delete')
    deleteCache(){
        return this.cachingService.deleteCache();
    }

    @Get('clear')
    clearCache(){
        return this.cachingService.clearCache();
    }
}
