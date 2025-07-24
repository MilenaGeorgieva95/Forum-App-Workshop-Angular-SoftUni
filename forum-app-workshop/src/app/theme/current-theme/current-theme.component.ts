import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  themeId: string = '';
  theme = {} as Theme;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.themeId = params.get('themeId') ?? '';
      this.apiService
        .getTheme(this.themeId)
        .subscribe((theme) => this.theme=theme);
    });
  }
}
