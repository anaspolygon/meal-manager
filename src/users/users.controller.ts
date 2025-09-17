import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return await this.usersService.createUser(user);
  }
}
