import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CreateUserModule } from 'src/user/create-user/create-user.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SecurityModule } from 'src/security/security.module';

@Module({
  imports:[CreateUserModule, PrismaModule, SecurityModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
