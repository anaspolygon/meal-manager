import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { HashingProvider } from './provider/hashing.provider';
import { BcryptProvider } from './provider/bcrypt.provider';

@Module({
  controllers: [AuthController],
  providers: [AuthService, HashingProvider, BcryptProvider],
  imports: [UsersModule],
})
export class AuthModule {}
