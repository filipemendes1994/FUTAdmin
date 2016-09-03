import { Component, OnInit, OnDestroy } from '@angular/core';
import { IStudent} from '../student';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { Observable } from 'rxjs';

@Component({
  selector: 'list-students',
  templateUrl: 'list-students.component.html',
  styleUrls: ['list-students.component.css']
})
export class ListStudentsComponent implements OnInit, OnDestroy {

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

  deleteStudent(key: string) {
    this.as.deleteStudent(key);
  }
  search(term: string){
    if (term !== ''){
      this.students = this.as.filter(term);
    }else{
       this.students = this.as.getStudents();
    }

  }

  ngOnDestroy(){
    this.studentsSubscription.unsubscribe();
  }
}
