import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { MainComponent } from '../main/main.component';


const routes: Routes = [
  { path: 'themes', component: MainComponent},
  { path: 'add-theme', component: AddThemeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
