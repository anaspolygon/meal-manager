/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'First name must be a string' })
  @IsNotEmpty()
  @MinLength(3, {
    message:
      'First name is too short. Minimum length is $constraint1 characters',
  })
  @MaxLength(100, {
    message:
      'First name is too long. Maximum length is $constraint1 characters',
  })
  firstName: string;

  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty()
  @MinLength(3, {
    message:
      'Last name is too short. Minimum length is $constraint1 characters',
  })
  @MaxLength(100, {
    message: 'Last name is too long. Maximum length is $constraint1 characters',
  })
  lastName: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  gender?: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: 'Password is too short. Minimum length is $constraint1 characters',
  })
  @MaxLength(100)
  password: string;
}
