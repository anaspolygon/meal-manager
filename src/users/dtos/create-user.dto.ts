/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateProfileDto } from 'src/profile/dtos/create-profile.dto';

export class CreateUserDto {
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

  @IsOptional()
  profile?: CreateProfileDto;
}
