import { Profile } from 'src/profile/profile.entity';
import { UserBazars } from 'src/user_bazars/user_bazars.entity';
import { UserDeposits } from 'src/user_deposits/user_deposits.entity';
import { UserMeals } from 'src/user_meals/user_meals.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
    unique: true,
  })
  email: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
  })
  password: string;

  @OneToOne(() => Profile, (profile) => profile.user, {
    // eager: true,
    cascade: ['insert'],
  })
  @JoinColumn()
  profile?: Profile;

  @OneToMany(() => UserMeals, (usermeal) => usermeal.user)
  userMeals: UserMeals[];

  @OneToMany(() => UserDeposits, (userdeposit) => userdeposit.user)
  userDeposits: UserDeposits[];

  @OneToMany(() => UserBazars, (userBazar) => userBazar.user)
  userBazars: UserBazars[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
