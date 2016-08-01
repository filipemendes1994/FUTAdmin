import { Component, OnInit } from '@angular/core';
import { IProfessor} from '../professor';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { ProfessorsService } from '../professors.service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';

import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'list-professors',
  directives: [ MD_LIST_DIRECTIVES,
                ROUTER_DIRECTIVES,
                MD_ICON_DIRECTIVES,
                MD_CARD_DIRECTIVES,
                MD_PROGRESS_CIRCLE_DIRECTIVES,
                MD_INPUT_DIRECTIVES,
                MD_TOOLBAR_DIRECTIVES,
              ],
  templateUrl: 'list-professors.component.html',
  styleUrls: ['list-professors.component.css']
})
export class ListProfessorsComponent implements OnInit {

  professors: Observable<IProfessor[]>;
  constructor(public ps: ProfessorsService, private router: Router) {}

  ngOnInit() {
    this.professors = this.ps.getProfessors();
  }

  editProfessor(key: string) {
    this.router.navigate(['/professors', key]);
  }

  deleteProfessor(key: string) {
    this.ps.deleteProfessor(key);
  }

  search(term: string) {
    if (term !== '') {
      this.professors = this.ps.filter(term);
    }else {
       this.professors = this.ps.getProfessors();
    }
  }
}
