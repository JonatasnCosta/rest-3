import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindOneUserService {

    constructor(private readonly prisma: PrismaService) {}

    async findeOne(id: number){
        return this.prisma.user.findFirst({
            where:{
                id
            }
        })
    };
}
