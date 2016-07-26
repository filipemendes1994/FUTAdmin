import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IProfessor} from '../professor';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { ProfessoresService } from '../professores.service';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'list-professores',
  directives: [ MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES, MD_ICON_DIRECTIVES, MD_CARD_DIRECTIVES],
  templateUrl: 'list-professores.component.html',
  styleUrls: ['list-professores.component.css']
})
export class ListProfessoresComponent implements OnInit {

  professores: FirebaseListObservable<IProfessor[]>;
  constructor(public ps: ProfessoresService, private router: Router) {}

  ngOnInit() {
    this.professores = this.ps.getProfessores();
  }

  editProfessor(key: string) {
    this.router.navigate(['/professores', key]);
  }

  deleteProfessor(key: string) {
    this.ps.deleteProfessor(key);
  }
}
