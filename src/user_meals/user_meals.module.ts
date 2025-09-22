import { Module } from '@nestjs/common';
import { UserMealsController } from './user_meals.controller';
import { UserMealsService } from './user_meals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMeals } from './user_meals.entity';

@Module({
  controllers: [UserMealsController],
  providers: [UserMealsService],
  imports: [TypeOrmModule.forFeature([UserMeals])],
})
export class UserMealsModule {}
