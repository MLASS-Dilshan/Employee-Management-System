import { IsString } from "class-validator";

export class CreateEmployee {
    @IsString()
    firstName: string;

    @IsString()
    lastName : string;

    @IsString()
    address: string;

    @IsString()
    phoneNumber: string;

    @IsString()
    position: string;
}