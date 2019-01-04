import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socketStatus: boolean = false;

  constructor(
    private socket: Socket
  ) {
    this.status();
   }

  listen( evento: string ) {
    return this.socket.fromEvent(evento);
  }

  emit( evento: string, payload?: any, callback?: Function ) {
    this.socket.emit(evento, payload, callback  )
  }

  on( evento: string, callback: Function ) {
    this.socket.on( evento, callback )
  }

  status() {
    this.socket.on('connect', () => {
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      this.socketStatus = false;
    })

  }

}
