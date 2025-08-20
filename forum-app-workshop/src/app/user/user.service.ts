import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  private user$ = this.user$$.asObservable();
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isAuth(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    return this.http.post<UserForAuth>('/api/login', { email, password }).pipe(
      tap(user=>this.user$$.next(user))
    )
  }

  register(
    username: string,
    email: string,
    tel: string,
    password: string,
    rePassword: string
  ) {
    return this.http.post<UserForAuth>('/api/register', {
      username,
      email,
      tel,
      password,
      rePassword,
    });
  }

  logout() {
    return this.http.post('/api/logout', {});
  }
}
