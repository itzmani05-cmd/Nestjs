import { Controller,Get } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';

@Controller('dynamic-module')
export class DynamicModuleController {
    constructor(private dynamicService:DynamicModuleService){}

    @Get()
    getData(){
        return this.dynamicService.getValue();
    }
}
