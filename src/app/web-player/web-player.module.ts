import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
    PlayerComponent
  ]
})
export class WebPlayerModule { }
