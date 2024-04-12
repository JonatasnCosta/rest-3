import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class PartialUserService {

    async partialuser(id:number, data: UpdateUserDto){
        return {id, data}
    }
}
