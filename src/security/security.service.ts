import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class SecurityService {
    
    constructor(private readonly jwtService:JwtService,
               private readonly mailer: MailerService
    ) {}

    createToken(user: User){
        return {
            acessToken:this.jwtService.sign({
                id: user.id,
                name: user.name,
                email: user.email
              }, {
                expiresIn: "30 days",
                subject: String(user.id),
                issuer: "login",
                audience: "users"
              })
        }
    };

    checkToken(token:string){
      return this.jwtService.verify(token,{
        issuer: "login",
        audience: "users"
      })
    };
    
    async forget(user: User){
      const token = this.jwtService.sign({
        id: user.id
      },{
          expiresIn: '30 minutes',
          subject: String(user.id),
          issuer: 'forget',
          audience: 'users'
      });

      await this.mailer.sendMail({
       subject:'Recuperação de senha',
       to:'jonatas@gmail.com',
       template:'forget',
       context:{
          name: user.name,
          token
       }
     });
     return {
      sucess: 'true'
     } 
    };
}
