import {Component, OnInit, OnDestroy } from '@angular/core';
import {NgFor} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {IStudent, Student} from '../student';
import {ResponsibleAdult} from '../responsibleAdult';
import {StudentsService} from '../students.service';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {FirebaseObjectObservable} from 'angularfire2';
import { Subscription } from 'rxjs/Rx';

let max = 5;

@Component({
  moduleId: module.id,
  selector: 'form-student',
  templateUrl: 'form-students.component.html',
  styleUrls: ['form-students.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_CHECKBOX_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    FORM_DIRECTIVES,
    NgFor,
  ]
})
export class FormStudentsComponent implements OnInit, OnDestroy {
  public _keyStudent: string;
  private routerSubscription: Subscription;
  private studentObservable: FirebaseObjectObservable<IStudent>;
  private studentSubscription: Subscription;

  public edit: boolean = false;
  public student: Student;
  public ra: ResponsibleAdult;
  public months = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor(private as: StudentsService, private router: Router, private route: ActivatedRoute){
  }


  submit() {

    this.student.responsibleAdult = this.ra;
    console.log(this.student);

    if (!this.edit) {
      this.as.addStudent(this.student);
    } else {
      this.as.editStudent(this.studentObservable, this.student);
    }

    this.router.navigate(['/students']);

  }

  ngOnInit() {
    this.student = new Student();
    this.ra = new ResponsibleAdult();
    this.routerSubscription = this.route.params.subscribe(params => {
      this._keyStudent = params['id'];
      if (this._keyStudent !== undefined) {
        this.edit = true;
        this.studentObservable = this.as.getStudent(this._keyStudent);
        this.studentSubscription = this.studentObservable.subscribe(student => {
            this.student = student;
            this.student.responsibleAdult === undefined ? this.ra = new ResponsibleAdult() : this.ra = this.student.responsibleAdult;
          });
      }
    });
  }

  goToPayments(key: string) {
      this.router.navigate(['/students/form/' + this._keyStudent + '/payments']);
  }

  cancel() {
    this.router.navigate(['/students']);
  }

  copyFromStudent(prop: string) {
    this.ra[prop] = this.student[prop];
  }

  ngOnDestroy(){

    if(this.edit){
      this.studentSubscription.unsubscribe();
    }
    this.routerSubscription.unsubscribe();

  }
}
