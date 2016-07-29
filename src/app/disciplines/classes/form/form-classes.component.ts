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
import {FirebaseObjectObservable} from 'angularfire2';
import {HourDate} from '../hourDate';
import { MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {ProfessorsService} from '../../../professors/professors.service';
import {IProfessor} from '../../../professors/professor';
import { Observable } from 'rxjs';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

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
    NgFor,
  ],
  providers: [ClassesService, ProfessorsService]
})

export class FormClassesComponent implements OnInit {

  public classObservable: FirebaseObjectObservable<IClassT>;
  public classT: ClassT;
  public professorsObservable: Observable<IProfessor[]>;

  public schedule: HourDate;
  public presentationName: string;
  public sub: any;

  public discipline: string;
  public edit: boolean;

  constructor(public cs: ClassesService, public ps: ProfessorsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.classT = new ClassT();
    this.schedule = new HourDate();

    this.sub = this.route.params.subscribe(params => {
      this.discipline = params['type'];
      this.getPresentationName();

      if (this.discipline === 'fm') {
        this.presentationName = 'Formação Musical';
      } else if (this.discipline === 'inst') {
        this.presentationName = 'Instrumento';
      } else if (this.discipline === 'cc') {
        this.presentationName = 'Classe de Conjunto';
      } else if (this.discipline === 'inst') {
        this.presentationName = 'Solfejo';
      }

      let id = params['id'];
      if (id !== undefined) {
        this.edit = true;
        this.classObservable = this.cs.getClass(this.discipline, id);
        this.classObservable.subscribe(classT => {
            this.classT = classT;
            if (classT.timeSchedule !== undefined) {
              this.schedule = classT.timeSchedule;
            }
        });
      }
    });

    //this.professorsObservable = this.ps.getProfessorsByType(this.convertToPositionArrayCanGive(this.discipline));
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

  search(term: string) {
    if (term !== '') {
      this.professorsObservable = this.ps.filter(term);
    } else {
       this.professorsObservable = this.ps.getProfessors();
    }
  }

  checkProfessor(key: string) {
    this.classT.professor = key;
  }

}
