import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/service/web-socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(
    private wsService: WebSocketService
  ) { 
    this.escucharSockets();
    this.emitir();
  }

  ngOnInit() {
  }

  escucharSockets() {
    this.wsService.listen('test')
        .subscribe( (res: any) => {
          console.log(res);
        })
  }

  emitir() {
    this.wsService.emit('test', {'hola':'mundo'}, () => {
      console.log('ejecutando la funcion siguiente');
    });
  }

}
