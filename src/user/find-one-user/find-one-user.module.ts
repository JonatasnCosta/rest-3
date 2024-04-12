import { Module } from '@nestjs/common';
import { FindOneUserService } from './find-one-user.service';

@Module({
  providers: [FindOneUserService],
  exports:[FindOneUserService]
})
export class FindOneUserModule {}
