/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  id: number;

  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty()
  @MinLength(3, {
    message: 'Name is too short. Minimum length is $constraint1 characters',
  })
  name: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsEmail()
  email: string;
  isMarried: boolean;
}
