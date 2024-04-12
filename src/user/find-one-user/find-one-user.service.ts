import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOneUserService {

    async findeOne(id: number){
        return id;
    }
}
