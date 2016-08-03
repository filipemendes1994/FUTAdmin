import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { IStudent} from '../student';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { StudentsService } from '../students.service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';

import { Subscription } from 'rxjs/Rx';

import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'list-students',
  directives: [
      MD_LIST_DIRECTIVES,
      ROUTER_DIRECTIVES,
      MD_ICON_DIRECTIVES,
      MD_CARD_DIRECTIVES,
      MD_PROGRESS_CIRCLE_DIRECTIVES,
      MD_INPUT_DIRECTIVES,
      MD_TOOLBAR_DIRECTIVES
  ],
  templateUrl: 'list-students.component.html',
  styleUrls: ['list-students.component.css'],
  viewProviders: [MdIconRegistry],
  encapsulation: ViewEncapsulation.None
})
export class ListStudentsComponent implements OnInit,OnDestroy {

  public loading: boolean = true;
  students: Observable<IStudent[]>;
  studentsSubscription: Subscription;
  constructor(public as: StudentsService, private router: Router) {}

  ngOnInit() {
    this.students = this.as.getStudents();
    this.studentsSubscription = this.students.subscribe(onNext => {
      this.loading = false;

    });
  }

  editStudent(key: string) {
    this.router.navigate(['/students/form', key]);
  }

  deleteStudent(key: string) {
    this.as.deleteStudent(key);
  }
  search(term: string){
    if (term != ''){
      this.students = this.as.filter(term);
    }else{
       this.students = this.as.getStudents();
    }

  }

  ngOnDestroy(){
    this.studentsSubscription.unsubscribe();
  }
}
