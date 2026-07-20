import { IsEmail, IsString, MinLength } from "class-validator"

export class CreateUseDTO {

    @IsString()
    @MinLength(3)
    name!: string

    @IsEmail()
    email!: string
}