import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  declarations: [CurrentThemeComponent, AddThemeComponent],
  imports: [CommonModule, ThemeRoutingModule],
  exports: [AddThemeComponent, CurrentThemeComponent],
})
export class ThemeModule {}
