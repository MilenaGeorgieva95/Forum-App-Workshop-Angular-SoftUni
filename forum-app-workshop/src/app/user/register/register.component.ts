import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    username:['gosho'],
    email:['gosho@abv.bg'],
    tel:['123-123-123'],
    passGroup:this.fb.group({
      password:['123'],
      rePassword:['321321']
    })

  });

  constructor(private fb: FormBuilder) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
  }
}
