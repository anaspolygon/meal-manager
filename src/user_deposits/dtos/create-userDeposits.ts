import { IsIn, IsInt, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateUserDepositsDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  amount: number;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  userId: number;
}
