import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private apiService: ApiService) {}

  addTheme(e:Event, themeName: string, postText: string) {
    e.preventDefault();
    console.log(themeName);
    
    this.apiService
      .crteateTheme(themeName, postText)
      .subscribe((el) => console.log(el));
  }
}
