import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { HashingProvider } from './provider/hashing.provider';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly hashingProvider: HashingProvider,
  ) {}

  public async login(loginDto: LoginDto) {
    const user = await this.usersService.findUserByEmail(loginDto.email);
    let isEqual = false;
    if (user) {
      isEqual = await this.hashingProvider.comparePassword(
        loginDto.password,
        user?.password,
      );
    }
    return isEqual;
  }
  public async signup(createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
}
