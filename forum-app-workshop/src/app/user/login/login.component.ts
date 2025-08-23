import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  domains = EMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    this.userService.login(email, password).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/home']);
      },
    });
  }
}
