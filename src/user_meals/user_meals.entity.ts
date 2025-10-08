import { Users } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserMeals {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  breakfast_count: number;
  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  lunch_count: number;
  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  dinner_count: number;
  @Column({
    type: 'int',
    nullable: false,
    default: 0,
  })
  total: number;
  @ManyToOne(() => Users, (user) => user.userMeals)
  user: Users;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
