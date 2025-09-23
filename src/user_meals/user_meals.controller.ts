import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserMealsService } from './user_meals.service';
import { CreateUserMealsDto } from './dtos/create-userMeals.dto';

@Controller('user-meals')
export class UserMealsController {
  constructor(private readonly userMealsService: UserMealsService) {}
  @Get(':userId')
  getUserMeals(@Param('userId', ParseIntPipe) userId: number) {
    return this.userMealsService.getUserMeals(userId);
  }
  @Post()
  async createMeal(@Body() userMeal: CreateUserMealsDto) {
    return await this.userMealsService.createMeal(userMeal);
  }
}
