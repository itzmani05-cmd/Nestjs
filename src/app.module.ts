import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthModule } from '../../auth/auth.module';
import { UsersModule } from './users/users.module';
import { HashingModule } from './hashing/hashing.module';

@Module({
  imports: [ UsersModule, HashingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
