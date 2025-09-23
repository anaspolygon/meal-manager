import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.entity';
import { UserMealsModule } from './user_meals/user_meals.module';
import { UserDepositsModule } from './user_deposits/user_deposits.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        // entities: [Users, Profile],
        autoLoadEntities: true,
        synchronize: true,
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin1234',
        // password: 'password',
        database: 'mealmanager',
      }),
    }),
    ProfileModule,
    UserMealsModule,
    UserDepositsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
