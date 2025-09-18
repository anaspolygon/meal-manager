import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProfileDto {
  @IsString({ message: 'First name must be a string' })
  @IsOptional()
  @MinLength(3, {
    message:
      'First name is too short. Minimum length is $constraint1 characters',
  })
  @MaxLength(100, {
    message:
      'First name is too long. Maximum length is $constraint1 characters',
  })
  firstName?: string;

  @IsString({ message: 'Last name must be a string' })
  @IsOptional()
  @MinLength(3, {
    message:
      'Last name is too short. Minimum length is $constraint1 characters',
  })
  @MaxLength(100, {
    message: 'Last name is too long. Maximum length is $constraint1 characters',
  })
  lastName?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  gender?: string;

  @IsOptional()
  @IsDate()
  dateOfBirth?: Date;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  profilePicture?: string;
}
