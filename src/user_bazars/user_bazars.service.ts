import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBazars } from './user_bazars.entity';
import { CreateUserBazarsDto } from './dtos/create-userBazars.dto';

@Injectable()
export class UserBazarsService {
  constructor(
    @InjectRepository(UserBazars)
    private readonly userBazarsRepository: Repository<UserBazars>,
  ) {}
  public async createUserBazar(userBazar: CreateUserBazarsDto) {
    const newBazar = this.userBazarsRepository.create({
      ...userBazar,
      user: { id: userBazar.userId },
    });
    return await this.userBazarsRepository.save(newBazar);
  }
}
