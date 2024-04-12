import { Module } from '@nestjs/common';
import { UpdateUserService } from './update-user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FindOneUserModule } from '../find-one-user/find-one-user.module';

@Module({
  imports:[PrismaModule, FindOneUserModule],
  providers: [UpdateUserService],
  exports:[UpdateUserService]
})
export class UpdateUserModule {}
