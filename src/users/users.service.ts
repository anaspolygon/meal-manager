import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  public getAllUsers() {
    return this.usersRepository.find({
      select: ['id', 'email'],
    });
  }

  public async createUser(userDto: CreateUserDto) {
    const user = await this.usersRepository.findOne({
      where: { email: userDto.email },
    });
    if (user) {
      return 'User already exists';
    }
    let newUser = this.usersRepository.create(userDto);
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }
}
