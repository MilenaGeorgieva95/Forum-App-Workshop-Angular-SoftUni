import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';

@NgModule({
  declarations: [LoaderComponent, WelcomeComponent, EmailDirective, SlicePipe],
  imports: [CommonModule, RouterModule],
  exports: [LoaderComponent, WelcomeComponent, EmailDirective, SlicePipe],
})
export class SharedModule {}
