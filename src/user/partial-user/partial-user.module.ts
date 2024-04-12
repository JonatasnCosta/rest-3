import { Module } from '@nestjs/common';
import { PartialUserService } from './partial-user.service';

@Module({
  providers: [PartialUserService],
  exports:[PartialUserService]
})
export class PartialUserModule {}
