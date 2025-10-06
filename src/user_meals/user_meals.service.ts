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
    const today = new Date();

    // first day of month
    const start = new Date(today.getFullYear(), today.getMonth(), 1);
    start.setHours(0, 0, 0, 0);

    // last day of month
    const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);

    console.log(start, end);

    return this.userMealsRepository.find({
      where: {
        user: { id: userId },
        createdAt: Between(start, end),
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
