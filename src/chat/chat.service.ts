import { Injectable } from '@nestjs/common';
import { openai } from './dto/chat.dto';
import { THistory, TChatRequest } from './interfaces/chat.interface';

@Injectable()
export class ChatService {
  private readonly history: THistory[] = [];

  async chat(request: TChatRequest) {
    // 推入用户输入
    this.history.push({ role: 'user', content: request.content });
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: this.history,
    });
    const completion_text = completion.data.choices[0].message.content;
    // 推入机器人回答
    this.history.push({ role: 'assistant', content: completion_text });
    return this.history;
  }
}
