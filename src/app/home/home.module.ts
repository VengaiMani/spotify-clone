import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TrialComponent } from './trial/trial.component';
import { WebPlayerComponent } from './web-player/web-player.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login/login-page/login-page.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TrialComponent,
    WebPlayerComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [{path:'login',component:LoginPageComponent}]
    )
  ],
  exports:[
    NavbarComponent,
    TrialComponent,
    WebPlayerComponent,
    FooterComponent,
    IndexComponent
  ]
})
export class HomeModule { }
