import { Document } from "mongoose";

export interface Profile extends Document {
    userId: string;
    bio?: string;
    profilePictureUrl?: string;
}