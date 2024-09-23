import { IsString } from "class-validator";

export class CreateChatDto {
    @IsString()
    readonly sender: string;

    @IsString()
    readonly receiver: string;

    @IsString()
    readonly message: string;
}