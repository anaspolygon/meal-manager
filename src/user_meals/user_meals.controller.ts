import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UserMealsService } from './user_meals.service';
import { CreateUserMealsDto } from './dtos/create-userMeals.dto';

@Controller('user-meals')
export class UserMealsController {
  constructor(private readonly userMealsService: UserMealsService) {}
  @Get('today-meals')
  async getTodayMeals() {
    return await this.userMealsService.getTodayMeals();
  }
  @Get(':userId')
  getUserMeals(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('start') start: string,
    @Query('end') end: string,
  ) {
    console.log(start, end);
    return this.userMealsService.getUserMeals(userId);
  }

  @Post()
  async createMeal(@Body() userMeal: CreateUserMealsDto) {
    console.log(userMeal, '==================>');
    return await this.userMealsService.createMeal(userMeal);
  }
}
