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
export class UserBazars {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  bazar_cost: number;
  @Column({
    type: 'date',
  })
  bazar_date: Date;
  @ManyToOne(() => Users, (user) => user.userBazars)
  user: Users;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
