import { Document } from "mongoose";

export interface Chat extends Document {
    readonly sender: string;
    readonly receiver: string;
    readonly message: string;
    readonly createdAt: Date;
}