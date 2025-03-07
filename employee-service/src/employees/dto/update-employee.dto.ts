import { IsString } from "class-validator";

export class updateEmployee {
    @IsString()
    firstName : string;

    @IsString()
    lastName : string;

    @IsString()
    address : string;

    @IsString()
    phoneNumber : string;

    @IsString()
    position : string;
}