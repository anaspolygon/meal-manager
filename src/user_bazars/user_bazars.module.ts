import { Module } from '@nestjs/common';
import { UserBazarsController } from './user_bazars.controller';
import { UserBazarsService } from './user_bazars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBazars } from './user_bazars.entity';

@Module({
  controllers: [UserBazarsController],
  providers: [UserBazarsService],
  imports: [TypeOrmModule.forFeature([UserBazars])],
})
export class UserBazarsModule {}
