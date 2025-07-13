import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isAuth(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }
  login() {
    this.user = {
      firstName: 'Peter',
      email: 'peter@gmail.com',
      phoneNumber: '123-456',
      password: '1234',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
  register() {}
}
