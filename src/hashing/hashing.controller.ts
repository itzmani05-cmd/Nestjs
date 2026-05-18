import { Controller,Get } from '@nestjs/common';
import { HashingService } from './hashing.service';

@Controller('hashing')
export class HashingController {
    constructor(private readonly hashingService:HashingService){}
    @Get()
    getHash(){
        return this.hashingService.hashPassword();
    }

    @Get('compare')
    comparePassword(){
        return this.hashingService.comparePassword();
    }
}
