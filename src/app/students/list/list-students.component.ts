import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IStudent} from '../student';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { StudentsService } from '../students.service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'list-students',
  directives: [ MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES, MD_ICON_DIRECTIVES, MD_CARD_DIRECTIVES],
  templateUrl: 'list-students.component.html',
  styleUrls: ['list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students: FirebaseListObservable<IStudent[]>;
  constructor(public as: StudentsService, private router: Router) {}

  ngOnInit() {
    this.students = this.as.getStudents();
  }

  editStudent(key: string) {
    this.router.navigate(['/students', key]);
  }

  deleteStudent(key: string) {
    this.as.deleteStudent(key);
  }
}
