import { IsEnum, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export enum allowedGender{
    Macho,
    Hembra,
}

class CreateDogDto {

    @IsString()
    raza: string;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsNumber()
    edad: number;

    @IsNumber()
    peso: number;

    @IsEnum(allowedGender)
    genero: string;
}

export default CreateDogDto;