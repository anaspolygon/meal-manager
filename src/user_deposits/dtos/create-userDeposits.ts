import { IsIn, IsInt, IsNumber, IsPositive } from 'class-validator';

export class CreateUserDepositsDto {
  @IsNumber()
  @IsPositive()
  amount: number;
  @IsNumber()
  @IsPositive()
  userId: number;
}
