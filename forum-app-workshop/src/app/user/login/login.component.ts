import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  domains=EMAIL_DOMAINS;
  constructor(private userService: UserService) {}

  login(form:NgForm) {
    if(form.invalid){
      return
    }
    this.userService.login();
  }
}
