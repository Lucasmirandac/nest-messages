import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs';

@Injectable()
export class MessagesRepository {
	async findOne(id: string) {
		let messages: string;
		await readFile('E:/estudo/messages/messages.json', 'utf8', (err, data) => {
			if (err) throw err;
			messages = JSON.parse(data);
			console.log(messages);
		});
		return messages[id];
	}

	async findAll() {
		let messages: string;
		await readFile('E:/estudo/messages/messages.json', 'utf8', (err, data) => {
			if (err) throw err;
			messages = JSON.parse(data);
		});
		return messages;
	}

	async create(message: string) {
		let messages;
		readFile('E:/estudo/messages/messages.json', 'utf8', (err, data) => {
			messages = JSON.parse(data);
			const id = Math.floor(Math.random() * 999);
			messages[id] = { id, content: message };

			return new Promise((res, rej) =>
				writeFile('E:/estudo/messages/messages.json', messages, (err) =>
					err ? rej(err) : res(null),
				),
			);
		});
	}
}
