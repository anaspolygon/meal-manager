import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMeals } from './user_meals.entity';
import { Between, Raw, Repository } from 'typeorm';
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

    console.log(typeof start, end);
    console.log(typeof start.toISOString(), end.toISOString());

    return this.userMealsRepository.find({
      where: {
        user: { id: userId },
        // createdAt: Between(start, end),
        createdAt: Raw(
          (alias) =>
            `CAST(${alias} AS DATE) BETWEEN '${today.toISOString().split('T')[0]}' AND '${today.toISOString().split('T')[0]}'`,
        ),
      },
    });
  }

  public async createMeal(userMeal: CreateUserMealsDto) {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));
    // const user = await this.userMealsRepository.findOne({
    //   where: {
    //     id: userMeal.userId,
    //     createdAt: Between(startOfDay, endOfDay),
    //   },
    // });


    // console.log(user)

    // console.log(userMeal,"============================>");
    const meal = this.userMealsRepository.create({
      ...userMeal,
      user: { id: userMeal.userId },
    });
    return await this.userMealsRepository.save(meal);
  }
}
