import { forwardRef, Module } from '@nestjs/common';
import { CdAuthController } from './cd-auth.controller';
import { CdAuthService } from './cd-auth.service';
import { CdUserModule } from 'src/cd-user/cd-user.module';


@Module({
  imports:[forwardRef(()=>CdUserModule)],
  controllers: [CdAuthController],
  providers: [CdAuthService],
  exports:[CdAuthService]
})
export class CdAuthModule {}
