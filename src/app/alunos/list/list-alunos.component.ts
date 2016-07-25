import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IAluno, Aluno } from '../aluno';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { AlunosService } from '../alunos.service';
<<<<<<< HEAD
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
=======
import { ROUTER_DIRECTIVES,  Router} from '@angular/router';
>>>>>>> 48ad145805b7c5fa91ad076c961e9c2105770a64

@Component({
  moduleId: module.id,
  selector: 'list-alunos',
<<<<<<< HEAD
  directives: [ MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES, MD_ICON_DIRECTIVES, MD_CARD_DIRECTIVES],
=======
  directives: [ MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES],
>>>>>>> 48ad145805b7c5fa91ad076c961e9c2105770a64
  templateUrl: 'list-alunos.component.html',
  styleUrls: ['list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {

  alunos: FirebaseListObservable<IAluno[]>;t
  constructor(public as: AlunosService, private router: Router) {}

  ngOnInit() {
    this.alunos = this.as.getAlunos();
  }

  goToAluno(key: string)
  {
    this.router.navigate(['/alunos', key]);
  }
}
