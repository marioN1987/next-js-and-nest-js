import { IsString, IsEmail, MinLength } from "class-validator";

export class UserDto {
    @IsString({message: "Please enter email"})
    @IsEmail({}, {message: "Invalid email"})
    email: string;

    @IsString({message: "Please enter password"})
    @MinLength(6)
    password: string;
}