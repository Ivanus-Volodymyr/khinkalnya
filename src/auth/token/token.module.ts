import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { TokenService } from './token.service';
import { PrismaService } from '../../core/prisma.service';

@Module({
  providers: [TokenService, PrismaService, JwtService],
  imports: [],
})
export class TokenModule {}
