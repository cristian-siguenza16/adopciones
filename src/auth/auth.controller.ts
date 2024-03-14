import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './local.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('login')
    @UseGuards(LocalGuard)
    login(){
        return { message: 'Hello world' };
    }
}
