import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from './auth.service';
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { IAuthResponse } from "./interfaces/auth.interface";

@Controller('auth')
export class AuthController {
    constructor(private readonly authservice: AuthService) {}

    @Post('register')
    async register(@Body() registerDto: RegisterDto): Promise<IAuthResponse> {
        return this.authservice.register(registerDto);
    }

    @Post('login')
    async login(@Body() loginDto: LoginDto): Promise<IAuthResponse> {
        return this.authservice.login(loginDto);
    }
}