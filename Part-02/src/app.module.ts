import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common';
import { AppController, EnvController, MemberController, UserController,PersonController } from './app.controller';
import { AppService,PersonService } from './app.service';

import {ConfigModule} from '@nestjs/config';

import { LoggerMiddleware } from './middleware/logger.middleware';
import { DynamicModuleModule } from './dynamic-module/dynamic-module.module';
import { InjectionScopeModule } from './injection-scope/injection-scope.module';
import { CdUserModule } from './cd-user/cd-user.module';
import { CdAuthModule } from './cd-auth/cd-auth.module';
import { CachingModule } from './caching/caching.module';

@Module({
  imports: [ConfigModule.forRoot(), DynamicModuleModule.forRoot('Manikandan Learning NestJs'), InjectionScopeModule,CdUserModule, CdAuthModule, CachingModule],
  controllers: [AppController,UserController,MemberController,EnvController,PersonController,],
  providers: [AppService,PersonService,{
    provide:'',
    useFactory:async()=>{
      console.log('Connection Database...')
      await new Promise((resolve)=> setTimeout(resolve,3000));
      console.log('Database Connected');
      return{
        status:"Database Ready"
      }
    }
  }],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer  
        .apply(LoggerMiddleware)
        // .forRoutes('*');
        .forRoutes('users');
  }
}
