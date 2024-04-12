import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UpdateUserService {

    async updateUser(id: number, data: UpdateUserDto){
      data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());
      return {id, data}
    }
}
