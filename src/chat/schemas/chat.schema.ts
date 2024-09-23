import { Schema } from "mongoose";

export const ChatSchema = new Schema({
    sender: { type: String, required: true },
    receiver: {type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now},
});