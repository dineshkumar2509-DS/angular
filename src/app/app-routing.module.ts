import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';

const routes: Routes = [
  {
    path: 'home',component:HomeComponent
  },
  {
    path: 'registeration', component: RegisterationFormComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
