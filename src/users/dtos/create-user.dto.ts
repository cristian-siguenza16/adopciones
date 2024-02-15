import { IsEmail, IsOptional, IsString, IsUrl, MaxLength, MinLength, isString } from "class-validator";

class CreateUserDto {
    @IsString()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    address: string;
}

export default CreateUserDto;