import { Component, OnInit } from '@angular/core';
import {NgFor} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {ClassesService} from '../classes.service';
import {IClassT, ClassT} from '../class';
import {HourDate} from '../hourDate';
import { MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {ProfessorsService} from '../../../professors/professors.service';
import {IProfessor} from '../../../professors/professor';
import { Observable } from 'rxjs';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import {StudentsService} from '../../../students/students.service';
import {IStudent} from '../../../students/student';
import {FirebaseObjectObservable} from 'angularfire2';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-form-classes',
  templateUrl: 'form-classes.component.html',
  styleUrls: ['form-classes.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    ROUTER_DIRECTIVES,
    FORM_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    NgFor,
  ],
  providers: [ClassesService, ProfessorsService, StudentsService]
})

export class FormClassesComponent implements OnInit {

  private _idClass: string;
  public classObservable: FirebaseObjectObservable<IClassT>;
  public classT: ClassT;
  public professors: Observable<IProfessor[]>;
  public students: Observable<IStudent[]>;

  public schedule: HourDate;
  public presentationName: string;
  public sub: any;

  public discipline: string;
  public edit: boolean;

  constructor(public ss: StudentsService, public cs: ClassesService, public ps: ProfessorsService, 
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.classT = new ClassT();
    this.schedule = new HourDate();

    this.sub = this.route.params.subscribe(params => {
      this.discipline = params['type'];
      this.getPresentationName();

      this._idClass = params['id'];
      if (this._idClass !== undefined) {
        this.edit = true;
        this.classObservable = this.cs.getClass(this.discipline, this._idClass);
        this.classObservable.subscribe(classT => {
            this.classT = classT;
            if (classT.timeSchedule !== undefined) {
              this.schedule = classT.timeSchedule;
            }
        });
      }
    });

    this.professors = this.ps.getProfessorsByType(this.convertToPositionArrayCanGive(this.discipline));
    this.students = this.ss.getStudentsWithoutThis(this.discipline, this._idClass);
  }

  getPresentationName() {
    if (this.discipline === 'fm') {
      this.presentationName = 'Formação Musical';
    } else if (this.discipline === 'inst') {
      this.presentationName = 'Instrumento';
    } else if (this.discipline === 'cc') {
      this.presentationName = 'Classe de Conjunto';
    } else if (this.discipline === 'inst') {
      this.presentationName = 'Solfejo';
    }
  }

  convertToPositionArrayCanGive(disc: string) {
    if (disc === 'inst') {
      return 0;
    } else if (disc === 'fm') {
      return 1;
    } else if (disc === 'solf') {
      return 2;
    } else if (disc === 'cc') {
      return 3;
    }
  }

  searchProfessor(term: string) {
    if (term !== '') {
      this.professors = this.ps.filter(term);
    } else {
       this.professors = this.ps.getProfessorsByType(this.convertToPositionArrayCanGive(this.discipline));
    }
  }

  checkProfessor(key: string) {
    if (key === this.classT.professor) {
      this.classT.professor = '';
    } else {
      this.classT.professor = key;
    }
  }

  searchStudent(term: string) {
    if (term !== '') {
      this.students = this.ss.filter(term);
    } else {
       this.students = this.ss.getStudentsWithoutThis(this.discipline, this._idClass);
    }
  }

  checkStudent(student: IStudent) {

    if (this.discipline !== 'cc') {
      if (student.classes[this.discipline] === '') {
        student.classes[this.discipline] = this._idClass;
      } else {
        student.classes[this.discipline] = '';
      }
    } else {
      if (student.classes.cc === undefined) {
        student.classes.cc = new Array();
      }

      let pos = student.classes.cc.indexOf(this._idClass);
      if (pos >= 0) {
        student.classes.cc.splice(pos, 1);
      } else {
        student.classes.cc.push(this._idClass);
      }
    }

    this.ss.editStudent(this.ss.getStudent(student.$key), student);
  }

  verifyStudent(student: IStudent) {

    if (this.discipline === 'cc') {
      if (student.classes.cc === undefined) {
        return false;
      }
      if (student.classes.cc.indexOf(this._idClass) >= 0) {
        return true;
      } else {
        return false;
      }
    }

    if (student.classes[this.discipline] === this._idClass) {
      return true;
    } else {
      return false;
    }
  }

  submit() {
    this.classT.timeSchedule = this.schedule;

    if (!this.edit) {
      this.cs.addClass(this.classT, this.discipline);
    } else {
      this.cs.editClass(this.classObservable, this.classT);
    }

    this.router.navigate(['/disciplines/classes', this.discipline]);
  }
}
