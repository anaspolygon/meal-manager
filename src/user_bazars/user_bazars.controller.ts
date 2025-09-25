import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserBazarsService } from './user_bazars.service';
import { CreateUserBazarsDto } from './dtos/create-userBazars.dto';
import { UpdateUserBazarsDto } from './dtos/update-userBazars.dto';

@Controller('user-bazars')
export class UserBazarsController {
  constructor(private readonly userBazarsService: UserBazarsService) {}
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
