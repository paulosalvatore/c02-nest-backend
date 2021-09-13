import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestBody } from './model/LoginRequestBody';

@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() { email, senha }: LoginRequestBody) {
    return this.service.login(email, senha);
  }
}
