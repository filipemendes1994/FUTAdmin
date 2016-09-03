import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ListProfessorsComponent } from './list';
import { FormProfessorsComponent } from './form';
import { professorsRouting } from './professors.routes';
import { ProfessorsService } from './professors.service';
import { ProfessorsComponent } from './professors.component';

import { HttpModule } from '@angular/http';
import { MdIconModule } from '@angular2-material/icon';
import { MdButtonModule } from '@angular2-material/button';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';
import { MdCardModule } from '@angular2-material/card';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdRippleModule } from '@angular2-material/core';
import { MdCheckboxModule } from '@angular2-material/checkbox';


@NgModule({
  declarations: [
    ProfessorsComponent,
    ListProfessorsComponent,
    FormProfessorsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    professorsRouting,
    ReactiveFormsModule,
    MdCardModule,
    MdListModule,
    MdToolbarModule,
    HttpModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdProgressCircleModule,
    MdRippleModule,
    MdCheckboxModule
  ],
  providers: [ProfessorsService],
  bootstrap: [ProfessorsComponent]
})
export class ProfessorsModule {

}
