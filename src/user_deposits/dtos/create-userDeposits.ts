import { IsIn, IsInt, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateUserDepositsDto {
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  amount: number;
  @IsInt()
  @IsPositive()
  userId: number;
}
