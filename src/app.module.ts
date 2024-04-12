import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'; 
import { UserModule } from './user/user.module';
import { CreateUserModule } from './user/create-user/create-user.module';
import { FindOneUserModule } from './user/find-one-user/find-one-user.module';
import { CheckIdMiddleware } from './user/middlewares/check-id-middlware';
import { AuthModule } from './auth/auth.module';
import { SecurityModule } from './security/security.module';
import { ConfigModule } from '@nestjs/config';

@Module(
{imports: [UserModule, CreateUserModule, FindOneUserModule, AuthModule, SecurityModule, ConfigModule.forRoot()], 
controllers: [], 
providers: [], 
}) 

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CheckIdMiddleware).forRoutes({
            path:"users/:id",
            method: RequestMethod.ALL
        })
    }
}
