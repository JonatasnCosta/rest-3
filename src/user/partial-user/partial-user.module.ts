import { Module } from '@nestjs/common';
import { PartialUserService } from './partial-user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FindOneUserModule } from '../find-one-user/find-one-user.module';

@Module({
  imports:[PrismaModule, FindOneUserModule],
  providers: [PartialUserService],
  exports:[PartialUserService]
})
export class PartialUserModule {}
