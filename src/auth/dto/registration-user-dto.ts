import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @Length(2, 10)
  @IsNotEmpty()
  @ApiProperty({ example: 'username' })
  public name: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsNumber()
  public age: number;

  @IsString()
  @Length(2, 10)
  public city: string;

  @IsBoolean()
  public status?: boolean;

  @IsString()
  @Length(2, 20)
  @IsNotEmpty()
  readonly password: string;
}
