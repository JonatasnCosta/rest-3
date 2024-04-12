import { Injectable } from '@nestjs/common';

@Injectable()
export class RemoveUserService {


    async removeUser(id:number){
        return id
    }
}
