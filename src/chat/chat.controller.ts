import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { TChatRequest } from './interfaces/chat.interface';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post()
  async chat(@Body() request: TChatRequest) {
    return this.chatService.chat(request);
  }
}
