import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UpdateUserService {

    async updateUser(id: number, data: UpdateUserDto){
      return {id, data}
    }
}
