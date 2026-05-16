import { Module } from '@nestjs/common';
import { InjectionScopeController } from './injection-scope.controller';
import { InjectionScopeService } from './injection-scope.service';

@Module({
  controllers: [InjectionScopeController],
  providers: [InjectionScopeService]
})
export class InjectionScopeModule {}
