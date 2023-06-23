import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatemessagesDto } from './dtos/message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor(){
        this.messagesService = new MessagesService();
    }
    @Get()
    listMessages(){
        return this.messagesService.findAll()
    }

    @Post()
    createMessage(@Body() body: CreatemessagesDto){
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id:string){
        return this.messagesService.findOne(id);
    }
}
