import { Module } from '@nestjs/common';
import { RemoveUserService } from './remove-user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FindOneUserModule } from '../find-one-user/find-one-user.module';

@Module({
  imports:[PrismaModule, FindOneUserModule],
  providers: [RemoveUserService],
  exports:[RemoveUserService]
})
export class RemoveUserModule {}
