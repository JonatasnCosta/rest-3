import { Module } from '@nestjs/common';
import { FindOneUserService } from './find-one-user.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [FindOneUserService],
  exports:[FindOneUserService]
})
export class FindOneUserModule {}
