import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { CreateUserDto } from '../auth/dto/registration-user-dto';
import { PrismaService } from '../core/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createUser(user: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({ data: user });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async getUserById(id: number): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id: id } });
  }

  async getByEmail(email: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { email: email } });
  }

  async updateUserById(user, id: number): Promise<User> {
    return this.prismaService.user.update({
      where: { id: id },
      data: user,
    });
  }

  async deleteUserById(id: number): Promise<User> {
    return this.prismaService.user.delete({ where: { id: id } });
  }
}
