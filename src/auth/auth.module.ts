import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CreateUserModule } from 'src/user/create-user/create-user.module';

@Module({
  imports:[CreateUserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
