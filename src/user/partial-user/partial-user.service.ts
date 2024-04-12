import { Injectable } from '@nestjs/common';
import { PartialUserDto } from '../dto/partial-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PartialUserService {

    async partialuser(id:number, data: PartialUserDto){
    data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());
        return {id, data}
    }
}
