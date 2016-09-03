import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ListStudentsComponent } from './list';
import { FormStudentsComponent } from './form';
import { ListPaymentsComponent } from './payments/list';
import { studentRouting } from './students.routes';
import { StudentsService } from './students.service';
import { StudentsComponent } from './students.component';

import { HttpModule } from '@angular/http';
import { MdIconModule } from '@angular2-material/icon';
import { MdButtonModule } from '@angular2-material/button';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';
import { MdCardModule } from '@angular2-material/card';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdRippleModule } from '@angular2-material/core';


@NgModule({
  declarations: [
    StudentsComponent,
    ListStudentsComponent,
    FormStudentsComponent,
    ListPaymentsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    studentRouting,
    ReactiveFormsModule,
    MdCardModule,
    MdListModule,
    MdToolbarModule,
    HttpModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdProgressCircleModule,
    MdRippleModule
  ],
  providers: [StudentsService],
  bootstrap: [StudentsComponent]
})
export class StudentsModule {

}

