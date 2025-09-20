import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  public getAllUsers() {
    return this.usersRepository.find({
      select: ['id', 'email'],
      relations: ['profile'],
    });
  }

  public async createUser(userDto: CreateUserDto) {
    const user = await this.usersRepository.findOne({
      where: { email: userDto.email },
    });
    if (user) {
      return 'User already exists';
    }
    let profile = this.profileRepository.create(userDto.profile ?? {});
    await this.profileRepository.save(profile);
    let newUser = this.usersRepository.create(userDto);
    newUser.profile = profile;
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }
}
