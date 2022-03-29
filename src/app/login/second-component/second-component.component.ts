import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnChanges {
  @Input() data: any = {
    name: "",
    email: "",
    age: 0,
    phone: ""
  }
  name: string;
  email: string;
  age: string;
  password: string;
  constructor(private router:Router) {
    this.name = ''
    this.email = ''
    this.age = ''
    this.password = ''
  }

  ngOnChanges(changes: any) {
    this.name=changes["data"].currentValue.name.trim()
    this.age=changes["data"].currentValue.age.trim()
    this.email=changes["data"].currentValue.email.trim()
    this.password=changes["data"].currentValue.password.trim()
  }

  gotoHomePage(){
    this.router.navigate(['/']);
  }

}
