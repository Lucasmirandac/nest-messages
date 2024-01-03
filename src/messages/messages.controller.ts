import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
	
	constructor(public messagesService: MessagesService) {
	}

	@Get()
	listMessages() {
		return this.messagesService.findAll();
	}

	@Get('/:id')
	async getMessage(@Param('id') id: string) {
		console.log(id)
		const message = await this.messagesService.findOne(id);
		if (!message) throw new NotFoundException('Message not found');
		return message;
	}

	@Post()
	createMessage(@Body() body: CreateMessageDto) {
		this.messagesService.create(body.content);
	}
}
