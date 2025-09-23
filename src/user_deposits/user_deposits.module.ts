import { Module } from '@nestjs/common';
import { UserDepositsController } from './user_deposits.controller';
import { UserDepositsService } from './user_deposits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDeposits } from './user_deposits.entity';

@Module({
  controllers: [UserDepositsController],
  providers: [UserDepositsService],
  imports:[TypeOrmModule.forFeature([UserDeposits])]
})
export class UserDepositsModule {}
