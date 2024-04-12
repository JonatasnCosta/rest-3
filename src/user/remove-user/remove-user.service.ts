import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOneUserService } from '../find-one-user/find-one-user.service';

@Injectable()
export class RemoveUserService {

    constructor(private readonly prisma: PrismaService,
                private readonly findOneUser: FindOneUserService
    ) {}

    async removeUser(id:number){
        if (! await this.findOneUser.findeOne(id)) {
            throw new BadRequestException("Usuário não encontrado")
        }
        return this.prisma.user.delete({
            where:{
                id
            }
        })
    };
}
