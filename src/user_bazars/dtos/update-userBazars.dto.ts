import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBazarsDto } from './create-userBazars.dto';

export class UpdateUserBazarsDto extends PartialType(CreateUserBazarsDto) {}
