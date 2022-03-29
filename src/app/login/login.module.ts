import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeModule } from '../home/home.module';
import { AppRoutingModule } from '../app-routing.module';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent,
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomeModule,
    FormsModule
  ],
  exports:[
    LoginPageComponent,
    FirstComponentComponent,
    SecondComponentComponent
  ]
})
export class LoginModule { }
