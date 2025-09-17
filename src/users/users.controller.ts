import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];
  }
  @Post()
  createUser(@Body() user: CreateUserDto) {
    console.log(user instanceof CreateUserDto);
    return { message: 'User created' };
  }
}
