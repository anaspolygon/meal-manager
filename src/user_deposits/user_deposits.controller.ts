import { Body, Controller, Post } from '@nestjs/common';
import { UserDepositsService } from './user_deposits.service';
import { CreateUserDepositsDto } from './dtos/create-userDeposits';

@Controller('user-deposits')
export class UserDepositsController {
  constructor(private readonly userDepositsService: UserDepositsService) {}
  @Post()
  async createUserDeposit(@Body() userDeposit: CreateUserDepositsDto) {
    return await this.userDepositsService.createUserDeposit(userDeposit);
  }
}
