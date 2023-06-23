import { Get } from "@nestjs/common";
import { MessageRepository } from "./messages.repository";

export class MessagesService{
    messageRepo: MessageRepository;

    constructor(){
        //Service is creating a dependency
        this.messageRepo = new MessageRepository();//creating class of another instance
    }

   

    findOne(id:string){
        return this.messageRepo.findOne(id);
    }

    findAll(){
        return this.messageRepo.findAll();
    }

    create(content:string){
        return this.messageRepo.create(content);
    }
}