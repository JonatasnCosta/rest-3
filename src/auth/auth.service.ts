import { Injectable } from '@nestjs/common';
import { CreateUserService } from 'src/user/create-user/create-user.service';
import { AuthRegisterDto } from './dto/auth-register.dto';

@Injectable()
export class AuthService {
    
    constructor(private readonly createUserServer: CreateUserService) {}

    async register(data: AuthRegisterDto){
        return this.createUserServer.createUser(data)
    };
}
