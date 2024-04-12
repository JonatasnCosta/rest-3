import { Module } from '@nestjs/common'; 
import { UserModule } from './user/user.module';
import { CreateUserModule } from './user/create-user/create-user.module';
import { FindOneUserModule } from './user/find-one-user/find-one-user.module';

@Module(
{imports: [UserModule, CreateUserModule, FindOneUserModule], 
controllers: [], 
providers: [], 
}) 

export class AppModule {}
