import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {

    async createUser(data: CreateUserDto){
        data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());
        return data
    }
}
