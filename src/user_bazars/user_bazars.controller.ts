import { Body, Controller, Post } from '@nestjs/common';
import { UserBazarsService } from './user_bazars.service';
import { CreateUserBazarsDto } from './dtos/create-userBazars.dto';

@Controller('user-bazars')
export class UserBazarsController {
  constructor(private readonly userBazarsService: UserBazarsService) {}
  @Post()
  async createUserBazar(@Body() userBazar: CreateUserBazarsDto) {
    return await this.userBazarsService.createUserBazar(userBazar);
  }
}
