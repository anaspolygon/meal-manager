import { Between, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBazars } from './user_bazars.entity';
import { CreateUserBazarsDto } from './dtos/create-userBazars.dto';
import { UpdateUserBazarsDto } from './dtos/update-userBazars.dto';

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
  public async updateUserBazar(id: number, userBazar: UpdateUserBazarsDto) {
    const bazar = await this.userBazarsRepository.findOne({ where: { id } });
    if (bazar) {
      Object.assign(bazar, userBazar);
      return await this.userBazarsRepository.save(bazar);
    }
    return null;
  }
  public async getBazarList(startDate, endDate) {
    console.log(startDate, endDate);
    return await this.userBazarsRepository.find({
      where: {
        bazar_date: Between(startDate, endDate),
      },
    });
  }
}
