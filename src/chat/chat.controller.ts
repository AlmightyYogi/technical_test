import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from "./interfaces/chat.interface";

@Controller('chats')
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @Post()
    async create(@Body() createChatDto: CreateChatDto): Promise<Chat> {
        return this.chatService.create(createChatDto);
    }

    @Get()
    async findAll(): Promise<Chat[]> {
        return this.chatService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Chat> {
        return this.chatService.findById(id);
    }
}