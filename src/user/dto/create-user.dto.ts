import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '../types/role.enum';
export class CreateUserDto {
  id: number;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
}
