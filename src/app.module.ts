import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { UserMealsModule } from './user_meals/user_meals.module';
import { UserDepositsModule } from './user_deposits/user_deposits.module';
import { UserBazarsModule } from './user_bazars/user_bazars.module';

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
        // password: 'admin1234',
        password: 'password',
        database: 'mealmanager',
      }),
    }),
    ProfileModule,
    UserMealsModule,
    UserDepositsModule,
    UserBazarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
