import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
	@Get()
	listMessages() {}

	@Get('/:id')
	getMessage(@Param('id') id: string) {
		console.log(id);
	}

	@Post()
	createMessage(@Body() body: CreateMessageDto) {
		console.log(body);
	}
}
