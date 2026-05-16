import { forwardRef, Module } from '@nestjs/common';
import { CdUserController } from './cd-user.controller';
import { CdUserService } from './cd-user.service';
import { CdAuthModule } from 'src/cd-auth/cd-auth.module';

@Module({
  imports:[
    forwardRef(()=>CdAuthModule)
  ],
  controllers: [CdUserController],
  providers: [CdUserService],
  exports:[CdUserService,]
})
export class CdUserModule {}
