import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TrialComponent } from './trial/trial.component';
import { WebPlayerComponent } from './web-player/web-player.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TrialComponent,
    WebPlayerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
