import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AddThemeComponent } from './add-theme/add-theme.component';

@NgModule({
  declarations: [CurrentThemeComponent, AddThemeComponent],
  imports: [CommonModule],
  exports: [AddThemeComponent, CurrentThemeComponent],
})
export class ThemeModule {}
