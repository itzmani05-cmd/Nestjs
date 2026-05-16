import {DynamicModule,Module } from '@nestjs/common';
import { DynamicModuleController } from './dynamic-module.controller';
import { DynamicModuleService } from './dynamic-module.service';

@Module({
  controllers: [DynamicModuleController],
  providers: [DynamicModuleService]
})
export class DynamicModuleModule {
  static forRoot(value:string):DynamicModule{
    return{
      module:DynamicModuleModule,
      providers:[
        {
          provide:'DYNAMIC_VALUE',
          useValue:value,
        }
      ]
    }
  }
}
