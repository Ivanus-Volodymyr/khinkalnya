import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PrismaService } from '../core/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { TokenService } from './token/token.service';
import { TokenModule } from './token/token.module';

@Module({
  providers: [
    AuthService,
    PrismaService,
    JwtService,
    UserService,
    TokenService,
  ],
  controllers: [AuthController],
  imports: [UserModule, TokenModule],
})
export class AuthModule {}
