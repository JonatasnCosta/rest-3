import { Module } from '@nestjs/common';
import { FindAllUsrsService } from './find-all-usrs.service';

@Module({
  providers: [FindAllUsrsService],
  exports :[FindAllUsrsService]
})
export class FindAllUsrsModule {}
