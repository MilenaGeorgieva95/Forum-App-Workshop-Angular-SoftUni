import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private apiService: ApiService) {}

  addTheme(form:NgForm) {
    if(form.invalid){
      return;
    }

    console.log(form.value);
    const {themeName, postText}=form.value
    
    this.apiService
      .crteateTheme(themeName, postText)
      .subscribe((el) => console.log(el));
  }
}

