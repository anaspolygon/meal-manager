import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly porfileRepository: Repository<Profile>,
  ) {}

  public getAllProfiles() {
    return this.porfileRepository.find({
      relations: ['user'],
    });
  }
}
