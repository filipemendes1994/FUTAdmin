import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ListDisciplinesComponent } from './list';
import { disciplinesRouting } from './disciplines.routes';
import { DisciplinesComponent } from './disciplines.component';
import { StudentsService } from '../students/students.service';
import { ProfessorsService } from '../professors/professors.service';
import { ClassesService } from './classes/classes.service';

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
import { MdGridListModule } from '@angular2-material/grid-list';


@NgModule({
  declarations: [
    DisciplinesComponent,
    ListDisciplinesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    disciplinesRouting,
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
    MdCheckboxModule,
    MdGridListModule
  ],
  providers: [ClassesService, ProfessorsService, StudentsService],
  bootstrap: [DisciplinesComponent]
})
export class DisciplinessModule {

}
