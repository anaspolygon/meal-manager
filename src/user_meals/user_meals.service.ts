import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMeals } from './user_meals.entity';
import { Repository } from 'typeorm';
import { CreateUserMealsDto } from './dtos/create-userMeals.dto';

@Injectable()
export class UserMealsService {
  constructor(
    @InjectRepository(UserMeals)
    private readonly userMealsRepository: Repository<UserMeals>,
  ) {}

  public async createMeal(userMeal: CreateUserMealsDto) {
    const meal = this.userMealsRepository.create(userMeal);
    return await this.userMealsRepository.save(meal);
  }
}
