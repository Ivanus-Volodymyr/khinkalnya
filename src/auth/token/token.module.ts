import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { PrismaService } from '../../core/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [TokenService, PrismaService, JwtService],
  imports: [],
})
export class TokenModule {}
