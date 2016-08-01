import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from '../students/students.service';
import { ProfessorsService } from '../professors/professors.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [StudentsService, ProfessorsService]
})
export class HomeComponent implements OnInit, OnDestroy {

  studentsTotalCount: number = 0;

  constructor(public ss:StudentsService, public ps:ProfessorsService) {}

  ngOnInit() {
      this.ss.getStudents().map(list => list.length).subscribe(lenght =>  this.studentsTotalCount = lenght);;
  }

  ngOnDestroy(){

  }

}
