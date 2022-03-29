import { Component,EventEmitter,Output } from '@angular/core';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  
  @Output() data=new EventEmitter<any>();
  onSubmit(user:any){
    this.data.emit({
      name:user.uname,
      email:user.uemail,
      age:user.uage,
      password:user.psw
    })
  }

}
