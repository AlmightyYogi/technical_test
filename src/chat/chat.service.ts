import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Chat } from "./interfaces/chat.interface";
import { CreateChatDto } from "./dto/create-chat.dto";

@Injectable()
export class ChatService {
    constructor(@InjectModel('Chat') private readonly chatModel: Model<Chat>) {}

    async create(CreateChatDto: CreateChatDto): Promise<Chat> {
        const createdChat = new this.chatModel(CreateChatDto);
        return createdChat.save();
    }

    async findAll(): Promise<Chat[]> {
        return this.chatModel.find().exec();
    }

    async findById(id: string): Promise<Chat> {
        return this.chatModel.findById(id).exec();
    }
}