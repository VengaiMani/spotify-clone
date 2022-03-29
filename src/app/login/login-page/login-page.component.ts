import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  data = {
    name: "",
    email: "",
    age: 0,
    password: ""
  }

  forward($user: any) {
    this.data = $user;
  }

}
