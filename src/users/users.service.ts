import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from 'src/profile/profile.entity';
import { HashingProvider } from 'src/auth/provider/hashing.provider';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider,
  ) {}

  public async getAllUsers() {
    const users = await this.usersRepository.find({
      select: ['id', 'name', 'email'],
      relations: ['profile'],
    });
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }

  public async createUser(userDto: CreateUserDto) {
    const user = await this.usersRepository.findOne({
      where: { email: userDto.email },
    });
    if (user) {
      return 'User already exists';
    }
    // let profile = this.profileRepository.create(userDto.profile ?? {});
    // await this.profileRepository.save(profile);
    userDto.profile = userDto.profile ?? {};
    let newUser = this.usersRepository.create({
      ...userDto,
      password: await this.hashingProvider.hashPassword(userDto.password),
    });
    // newUser.profile = profile;
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }

  public async deleteUser(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    await this.usersRepository.delete(id);
    if (user && user.profile) {
      await this.profileRepository.delete(user.profile.id);
    }

    return 'User deleted successfully';
  }

  public async findUserByEmail(email: string) {
    return await this.usersRepository.findOneBy({ email });
  }
}
