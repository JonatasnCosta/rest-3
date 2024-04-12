import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOneUserService } from '../find-one-user/find-one-user.service';

@Injectable()
export class UpdateUserService {
     
  constructor(private readonly prisma: PrismaService,
              private readonly findOneUser: FindOneUserService
      
  ) {}
  
  async updateUser(id: number, data: UpdateUserDto){
      data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());
      if (! await this.findOneUser.findeOne(id)) {
        throw new BadRequestException("Id inválido");
      }
      return this.prisma.user.update({
        data,
        where:{
          id
        }
      })
    };
}
