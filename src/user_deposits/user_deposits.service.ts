import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDeposits } from './user_deposits.entity';
import { Repository } from 'typeorm';
import { CreateUserDepositsDto } from './dtos/create-userDeposits';

@Injectable()
export class UserDepositsService {
  constructor(
    @InjectRepository(UserDeposits)
    private readonly userDepositsRepository: Repository<UserDeposits>,
  ) {}

  async createUserDeposit(userDeposit: CreateUserDepositsDto) {
    const newDeposit = this.userDepositsRepository.create({
      ...userDeposit,
      user: { id: userDeposit.userId },
    });
    return await this.userDepositsRepository.save(newDeposit);
  }
}
