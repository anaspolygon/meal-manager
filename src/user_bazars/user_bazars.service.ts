import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBazars } from './user_bazars.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserBazarsService {
    constructor(
        @InjectRepository(UserBazars)
        private readonly userBazarsRepository: Repository<UserBazars>,
    ){}
    
}
