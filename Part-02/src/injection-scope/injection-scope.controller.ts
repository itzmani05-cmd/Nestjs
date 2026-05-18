import { Controller,Get} from '@nestjs/common';
import { InjectionScopeService } from './injection-scope.service';
@Controller('injection')
export class InjectionScopeController {
    // constructor(private injectionService:InjectionScopeService,){}
    constructor(private injectionService1:InjectionScopeService,private injectionService2:InjectionScopeService,){}
    @Get()
    getData(){
        // return this.injectionService.getCount();
        return {
            firstService:this.injectionService1.getCount(),
            secondService:this.injectionService2.getCount()
        }
    }
}
