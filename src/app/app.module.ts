import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { RegisterationFormComponent } from './registeration-form/registeration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SyptomsComponent } from './syptoms/syptoms.component';
import { HomeComponent } from './home/home.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationFormComponent,
    SyptomsComponent,
    HomeComponent,
    PatientsDetailsComponent
  ],
  entryComponents:[
    SyptomsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
