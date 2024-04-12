import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { LogInterceptador } from 'src/user/interceptadors/log-interceptador';
import { AuthLoginDto } from './dto/auth-login.dto';

@UseInterceptors(LogInterceptador)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body()data: AuthRegisterDto){
    return this.authService.register(data)
  };

  @Post('login')
  async login(@Body(){email, password}: AuthLoginDto){
    return this.authService.login(email, password)
  };
  
}
