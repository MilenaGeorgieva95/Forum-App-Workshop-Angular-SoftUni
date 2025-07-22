import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
constructor(private userService:UserService){}
get isLoggedIn():boolean{
  return this.userService.isAuth
}
}
