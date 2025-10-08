import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class CreateUserMealsDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  breakfast_count?: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  lunch_count: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  dinner_count: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  total: number;
}
