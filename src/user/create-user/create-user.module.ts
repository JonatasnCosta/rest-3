import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [CreateUserService],
  exports:[CreateUserService]
})
export class CreateUserModule {}
