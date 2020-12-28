import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';

const routes: Routes = [
  {
    path: 'home',component:HomeComponent
  },
  {
    path: 'registeration', component: RegisterationFormComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'details', component:PatientsDetailsComponent
  },
  {
    path:"veiwdetails",component:ViewpatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
