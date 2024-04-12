import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class CreateUserService {

    async createUser(data: CreateUserDto){
        return data
    }
}
