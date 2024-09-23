import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { Profile } from "./interfaces/profile.interface";

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Post()
    async create(@Body() createProfileDto: CreateProfileDto): Promise<Profile> {
        return this.profileService.create(createProfileDto);
    }

    @Get(':userId')
    async findByUserId(@Param('userId') userId: string): Promise<Profile> {
        return this.profileService.findUserById(userId);
    }

    @Put(':userId')
    async update(
        @Param('userId') userId: string,
        @Body() updateProfileDto: UpdateProfileDto,
    ): Promise<Profile> {
        return this.profileService.update(userId, updateProfileDto);
    }
}