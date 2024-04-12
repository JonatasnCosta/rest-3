import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CreateUserModule } from './create-user/create-user.module';
import { FindAllUsrsModule } from './find-all-usrs/find-all-usrs.module';
import { UpdateUserModule } from './update-user/update-user.module';
import { PartialUserModule } from './partial-user/partial-user.module';
import { RemoveUserModule } from './remove-user/remove-user.module';
import { FindOneUserModule } from './find-one-user/find-one-user.module';
import { SecurityModule } from 'src/security/security.module';

@Module({
  imports:[CreateUserModule,FindOneUserModule ,FindAllUsrsModule, 
  UpdateUserModule, PartialUserModule, RemoveUserModule, SecurityModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
