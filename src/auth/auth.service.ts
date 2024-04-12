import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserService } from 'src/user/create-user/create-user.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { SecurityService } from 'src/security/security.service';

@Injectable()
export class AuthService {
    
    constructor(private readonly createUserServer: CreateUserService,
                private readonly prisma: PrismaService,
                private readonly security: SecurityService,
    ) {}

    async register(data: AuthRegisterDto){
        return this.createUserServer.createUser(data)
    };

    async login(email:string, password:string){
    const user = await this.prisma.user.findFirst({
        where:{
            email
        }
      });
      if (!user || !await bcrypt.compare(password, user.password)) {
        throw new UnauthorizedException("Email ou senha incorretos");
      }
      return this.security.createToken(user)
    };
}
