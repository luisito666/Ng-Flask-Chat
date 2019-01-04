import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { RoutingModule } from '../routing.module';


@NgModule({
  declarations: [
    ChatComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    ChatComponent,
    NavComponent
  ]
})
export class ComponentsModule { }
