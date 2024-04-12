import { Module } from '@nestjs/common';
import { FindAllUsrsService } from './find-all-usrs.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [FindAllUsrsService],
  exports :[FindAllUsrsService]
})
export class FindAllUsrsModule {}
