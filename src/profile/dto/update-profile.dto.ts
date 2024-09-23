import { IsString, IsOptional } from "class-validator";

export class UpdateProfileDto {
    @IsOptional()
    @IsString()
    readonly bio?: string;

    @IsOptional()
    @IsString()
    readonly profilePictureUrl?: string;
}