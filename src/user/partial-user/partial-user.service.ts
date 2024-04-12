import { BadRequestException, Injectable } from '@nestjs/common';
import { PartialUserDto } from '../dto/partial-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOneUserService } from '../find-one-user/find-one-user.service';

@Injectable()
export class PartialUserService {

    constructor(private readonly prisma: PrismaService,
                private readonly findOneUser: FindOneUserService
    ) {}

    async partialuser(id:number, data: PartialUserDto){
        if (data.password) {
        data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());
        }
        if (! await this.findOneUser.findeOne(id)) {
            throw new BadRequestException("Usuário não encontrado")
        }
        return this.prisma.user.update({
            data,
            where:{
                id
            }
        })
    };
}
