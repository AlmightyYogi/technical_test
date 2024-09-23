import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from './interfaces/profile.interface';

@Injectable()
export class ProfileService {
  constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>) {}

  async create(profile: Profile): Promise<Profile> {
    const newProfile = new this.profileModel(profile);
    return newProfile.save();
  }

  async findById(id: string): Promise<Profile> {
    return this.profileModel.findById(id).exec();
  }

  async update(id: string, profile: Profile): Promise<Profile> {
    return this.profileModel.findByIdAndUpdate(id, profile, { new: true }).exec();
  }
}