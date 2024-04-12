import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreateUserService {

    constructor(private readonly prisma: PrismaService) {}

    async createUser(data: CreateUserDto){
        data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());
        return this.prisma.user.create({
            data
        })
    };
}
