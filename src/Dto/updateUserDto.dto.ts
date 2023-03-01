import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateUserDto{

    @IsNotEmpty()
    @IsString()
    FirstName: string;

    @IsNotEmpty()
    @IsString()
    Phone: string;

    Comments: {
        id: string,
        comment: string
    };
}