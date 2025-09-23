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
export class UserDeposits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'decimal',
    precision:10,
    scale:2,
    nullable: false,
    default: 0,
  })
  amount: number;

  @ManyToOne(() => Users, (user) => user.userDeposits)
  user: Users;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
