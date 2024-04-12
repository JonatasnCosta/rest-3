import { Injectable } from '@nestjs/common';
import { PartialUserDto } from '../dto/partial-user.dto';

@Injectable()
export class PartialUserService {

    async partialuser(id:number, data: PartialUserDto){
        return {id, data}
    }
}
