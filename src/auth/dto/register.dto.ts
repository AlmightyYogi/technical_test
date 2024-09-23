import { IsString, IsEmail } from 'class-validator';

export class RegisterDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly zodiact: string;
}
