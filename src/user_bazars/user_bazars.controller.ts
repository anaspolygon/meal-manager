import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserBazarsService } from './user_bazars.service';
import { CreateUserBazarsDto } from './dtos/create-userBazars.dto';
import { UpdateUserBazarsDto } from './dtos/update-userBazars.dto';

@Controller('user-bazars')
export class UserBazarsController {
  constructor(private readonly userBazarsService: UserBazarsService) {}
  @Get()
  async getBazarList(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.userBazarsService.getBazarList(startDate, endDate);
  }
  @Post()
  async createUserBazar(@Body() userBazar: CreateUserBazarsDto) {
    return await this.userBazarsService.createUserBazar(userBazar);
  }

  @Patch(':id')
  async updateUserBazar(
    @Param('id', ParseIntPipe) id: number,
    @Body() userBazar: UpdateUserBazarsDto,
  ) {
    return await this.userBazarsService.updateUserBazar(id, userBazar);
  }
}
