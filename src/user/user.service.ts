import { Injectable } from '@nestjs/common';
import { Role } from './types/role.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    const user = this.userRepo.create(dto);
    return await this.userRepo.save(user);
  }

  async findAll(role?: Role) {
    if (role) {
      return await this.userRepo.find({ where: { role } });
    }
    return await this.userRepo.find();
  }

  async findOne(id: number) {
    return await this.userRepo.findOne({ where: { id } });
  }

  async findByUsername(username: string) {
    return await this.userRepo.findOne({ where: { username } });
  }

  async update(id: number, dto: UpdateUserDto) {
    await this.userRepo.update(id, dto);
    return this.userRepo.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.userRepo.delete(id);
    return { deleted: true } as const;
  }
}
