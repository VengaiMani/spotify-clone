import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumComponent } from './premium/premium.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    PremiumComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
    PremiumComponent
  ]
})
export class PremiumModule { }
