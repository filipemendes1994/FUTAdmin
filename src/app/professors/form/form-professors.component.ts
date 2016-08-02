import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {IProfessor, Professor} from '../professor';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {FirebaseObjectObservable} from 'angularfire2';
import {ProfessorsService} from '../professors.service';
import { NG2_DROPDOWN_DIRECTIVES } from 'ng2-material-dropdown';

let max = 5;

@Component({
  moduleId: module.id,
  selector: 'form-professors',
  templateUrl: 'form-professors.component.html',
  styleUrls: ['form-professors.component.css'],
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
    NG2_DROPDOWN_DIRECTIVES,
    NgFor,
  ]
})
export class FormProfessorsComponent implements OnInit {

  private sub: any;
  private professorObservable: FirebaseObjectObservable<IProfessor>;

  public edit: boolean = false;
  public professor: Professor;
  public canGive: boolean[];

  constructor(public ps: ProfessorsService, private router: Router, private route: ActivatedRoute){
  }


  submit() {
    this.professor.canGive = this.canGive;
    if (!this.edit) {
      this.professor.entryDate = new Date();
    }
    if (!this.edit) {
      this.ps.addProfessor(this.professor);
    } else {
      this.ps.editProfessor(this.professorObservable, this.professor);
    }

    this.router.navigate(['/professors']);

  }

  ngOnInit() {
    this.professor = new Professor();
    this.canGive = new Array(4);
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      if (id !== undefined) {
        this.edit = true;
        this.professorObservable = this.ps.getProfessor(id);
        this.professorObservable.subscribe(professor => { this.professor = professor;
                                                          this.edit = true;
                                                          if (this.professor.canGive !== undefined) {
                                                            this.canGive = this.professor.canGive;
                                                          }
                                                      });
      }
    });
  }
}