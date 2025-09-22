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
    console.log(userMeal);
    const meal = this.userMealsRepository.create({...userMeal,user:{id:userMeal.userId}});
    return await this.userMealsRepository.save(meal);
  }
}
