import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return await this.authService.signup(createUserDto);
  }
}
