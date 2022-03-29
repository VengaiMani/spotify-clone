import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login/login-page/login-page.component';
import { CentralComponent } from './central/central.component';
import { PlayerComponent } from '../web-player/player/player.component';
import { PremiumComponent } from '../premium/premium/premium.component';
import { DownloadComponent } from '../download/download/download.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    CentralComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [{ path: 'login', component: LoginPageComponent },
      { path: 'player', component: PlayerComponent },
      { path: 'premium', component: PremiumComponent },
      { path: 'download', component: DownloadComponent }]
    )
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class HomeModule { }
