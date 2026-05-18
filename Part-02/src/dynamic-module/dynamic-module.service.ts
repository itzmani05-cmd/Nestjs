import { Inject,Injectable } from '@nestjs/common';

@Injectable()
export class DynamicModuleService {
    constructor(
        @Inject('DYNAMIC_VALUE')
        private value:string,
    ){}

    getValue(){
        return this.value;
    }
}
