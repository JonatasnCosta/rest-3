import { Module } from '@nestjs/common';
import { RemoveUserService } from './remove-user.service';

@Module({
  providers: [RemoveUserService],
  exports:[RemoveUserService]
})
export class RemoveUserModule {}
