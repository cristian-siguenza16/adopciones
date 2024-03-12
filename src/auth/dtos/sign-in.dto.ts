import { IsEmail, IsString } from "class-validator";

class SignInDto{
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}

export default SignInDto;