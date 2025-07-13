import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  get isLoggedIn(): boolean {
    return this.userService.isAuth;
  }

  constructor(private userService: UserService) {}
}
