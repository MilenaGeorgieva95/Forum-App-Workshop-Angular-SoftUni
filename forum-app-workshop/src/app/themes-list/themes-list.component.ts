import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  isLoading: boolean = true;
  constructor(private api: ApiService, private userService: UserService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log('Error: ' + err);
      },
    });
  }
    get isLoggedIn(): boolean {
    return this.userService.isAuth;
  }
}
