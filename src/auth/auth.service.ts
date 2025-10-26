import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async checkCredentials(username: string, password: string): Promise<User | null> {
    const user = await this.userRepo.findOne({ where: { username, password } });
    return user || null;
  }
}