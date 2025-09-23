import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMeals } from './user_meals.entity';
import { Between, Repository } from 'typeorm';
import { CreateUserMealsDto } from './dtos/create-userMeals.dto';

@Injectable()
export class UserMealsService {
  constructor(
    @InjectRepository(UserMeals)
    private readonly userMealsRepository: Repository<UserMeals>,
  ) {}

  public getUserMeals(userId: number) {
    console.log(new Date());
    return this.userMealsRepository.find({
      where: {
        user: { id: userId },
        createdAt: Between(new Date(), new Date()),
      },
    });
  }

  public async createMeal(userMeal: CreateUserMealsDto) {
    console.log(userMeal);
    const meal = this.userMealsRepository.create({
      ...userMeal,
      user: { id: userMeal.userId },
    });
    return await this.userMealsRepository.save(meal);
  }
}
