import { Body, Controller, Post } from '@nestjs/common';
import { UserMealsService } from './user_meals.service';
import { CreateUserMealsDto } from './dtos/create-userMeals.dto';

@Controller('user-meals')
export class UserMealsController {
  constructor(private readonly userMealsService: UserMealsService) {}
  @Post()
  async createMeal(@Body() userMeal: CreateUserMealsDto) {
    return await this.userMealsService.createMeal(userMeal);
  }
}
