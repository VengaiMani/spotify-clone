import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './download/download.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    DownloadComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[
    DownloadComponent
  ]
})
export class DownloadModule { }
