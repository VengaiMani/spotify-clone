import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownloadModule } from './download/download.module';
import { HomeModule } from './home/home.module';
import { IndexComponent } from './home/index/index.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginModule } from './login/login.module';
import { PremiumModule } from './premium/premium.module';
import { WebPlayerModule } from './web-player/web-player.module';

const appRoute = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: IndexComponent },
  // { path: '/home', component: IndexComponent },
  // { path: '/', component: IndexComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    PremiumModule,
    DownloadModule,
    WebPlayerModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
