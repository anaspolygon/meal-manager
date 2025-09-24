import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class CreateUserBazarsDto {
  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2 })
  bazar_cost: number;

  @IsDateString()
  @IsNotEmpty()
  bazar_date: string;

  @IsPositive()
  @IsInt()
  userId: number;
}
