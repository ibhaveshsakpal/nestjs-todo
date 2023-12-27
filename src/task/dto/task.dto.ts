import { IsString } from "class-validator";

export class createTaskDto {

    @IsString()
    creator: string;

    @IsString()
    task: string;

    @IsString()
    status: string
}