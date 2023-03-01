import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateUserDto{

    @IsNotEmpty()
    @IsString()
    FirstName: string;

    @IsNotEmpty()
    @IsString()
    LastName: string;

    @IsNotEmpty()
    @IsString()
    Email: string;

    @IsNotEmpty()
    @IsString()
    Phone: string;

    @IsNotEmpty()
    @IsString()
    Address: string;

    @IsNotEmpty()
    @IsString()
    Picture: string;

    @IsNotEmpty()
    @IsString()
    Cnic: string;

    @IsNotEmpty()
    @IsString()
    Gender: string;

    @IsNotEmpty()
    @IsString()
    Role: string;

    Comments: string[];
}