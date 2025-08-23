import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  addTheme(form:NgForm) {
    if(form.invalid){
      return;
    }

    console.log(form.value);
    const {themeName, postText}=form.value
    
    this.apiService
      .crteateTheme(themeName, postText)
      .subscribe(() => this.router.navigate(['/themes']));
  }
}

