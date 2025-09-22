import { Module } from '@nestjs/common';
import { UserMealsController } from './user_meals.controller';
import { UserMealsService } from './user_meals.service';

@Module({
  controllers: [UserMealsController],
  providers: [UserMealsService],
})
export class UserMealsModule {}
