import { Component, OnInit } from '@angular/core';
import { IProfessor} from '../professor';
import { ProfessorsService } from '../professors.service';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'list-professors',
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
