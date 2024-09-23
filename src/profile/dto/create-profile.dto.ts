import { IsString, IsOptional } from "class-validator";

export class CreateProfileDto {
    @IsString()
    readonly userId: string;

    @IsOptional()
    @IsString()
    readonly bio?: string;

    @IsOptional()
    @IsString()
    readonly profilePictureUrl?: string;
}