import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/registration-user-dto';
import { AuthService } from './auth.service';
import {LoginUserDto} from "./dto/login-user-dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({ summary: 'User Registration' })
  @ApiBody({
    schema: {
      example: {
        email: 'string',
        name: 'string',
        age: 'integer',
        city: 'string',
        password: 'string',
        status: 'boolean',
      },
    },
  })
  @ApiCreatedResponse({
    status: 201,
    schema: {
      example: {
        user: {
          id: 'number',
          email: 'string',
          name: 'string',
          age: 'integer',
          city: 'string',
          password: 'string',
          status: 'boolean',
          posts: 'Posts[]',
          comments: 'Comment[]',
        },
        access_token: 'string',
        refresh_token: 'string',
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('registration')
  registration(@Body() user: CreateUserDto) {
    return this.authService.registration(user);
  }

  @ApiOperation({ summary: 'User Login' })
  @ApiBody({
    schema: {
      example: {
        email: 'string',
        password: 'string',
      },
    },
  })
  @ApiCreatedResponse({
    status: 201,
    schema: {
      example: {
        user: {
          id: 'number',
          email: 'string',
          name: 'string',
          age: 'integer',
          city: 'string',
          password: 'string',
          status: 'boolean',
          posts: 'Posts[]',
          comments: 'Comment[]',
        },
        access_token: 'string',
        refresh_token: 'string',
      },
    },
  })
  @HttpCode(HttpStatus.FOUND)
  @Post('login')
  login(@Body() user: LoginUserDto) {
    return this.authService.login(user);
  }
}
