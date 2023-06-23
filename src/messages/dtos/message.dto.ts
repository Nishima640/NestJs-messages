import {IsInt, IsString} from "class-validator";

export class CreatemessagesDto{
   @IsString()//validator
    content:string
}
