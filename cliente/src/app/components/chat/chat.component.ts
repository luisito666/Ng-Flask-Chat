import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/service/web-socket.service';
import { Messages } from '../../interfaces/messages';
import { WebRequestService } from 'src/app/service/web-request.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  elemento: any;
  text = '';
  message: Messages;
  messages: Messages[] = [];

  constructor(
    private wsService: WebSocketService,
    private webReques: WebRequestService
  ) { 
    this.escucharSockets();
  }

  ngOnInit() {
    this.elemento = document.getElementById('msg_history');
    this.getMensajes()
  }

  enviar() {
    this.message = {
      id: 0,
      mensaje: this.text,
      de : 'luisito666',
      para: 'luisito0320'      
    }
    this.wsService.emit('messages', this.message );
    this.text = '';
  }

  escucharSockets() {
    this.wsService.listen('messages')
      .subscribe( (message: Messages ) => {
        this.messages.push(message);
        setTimeout( ()=>{
          this.elemento.scrollTop = this.elemento.scrollHeight;
        },20);
      });
  }

  getMensajes() {
    const user = 'luisito666'
    this.webReques.getConversaciones(user)
        .subscribe( (message: Messages[]) => {
          this.messages = message;
          // console.log(this.messages);
          setTimeout( ()=>{
            this.elemento.scrollTop = this.elemento.scrollHeight;
          },20);
          });
  }

}
