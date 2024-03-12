import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import SignInDto from './dtos/sign-in.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('login')
    async login(@Body() auth: SignInDto){
        const result = await this.authService.signIn(auth.email, auth.password);
        return result;
    }
}
