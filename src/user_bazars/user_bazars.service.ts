import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBazars } from './user_bazars.entity';

@Injectable()
export class UserBazarsService {
    constructor(
        @InjectRepository(UserBazars)
        private readonly userBazarsRepository: Repository<UserBazars>,
    ){}

}
