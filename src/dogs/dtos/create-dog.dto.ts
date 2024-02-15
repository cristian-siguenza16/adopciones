import { IsEnum, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export enum allowedGender{
    Macho = "Macho",
    Hembra = "Hembra",
}

class CreateDogDto {

    @IsString()
    raza: string;

    @IsString()
    @MinLength(1)
    @MaxLength(255)
    nombre: string;

    @IsString()
    edad: string;

    @IsString()
    peso: string;

    @IsEnum(allowedGender)
    genero: allowedGender;
}

export default CreateDogDto;