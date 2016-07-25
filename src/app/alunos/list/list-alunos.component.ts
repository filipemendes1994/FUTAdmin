import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Aluno } from '../aluno';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { AlunosService } from '../alunos.service';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'list-alunos',
  directives: [ MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES, MD_ICON_DIRECTIVES, MD_CARD_DIRECTIVES],
  templateUrl: 'list-alunos.component.html',
  styleUrls: ['list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {

  alunos: FirebaseListObservable<Aluno[]>;
  constructor(public as: AlunosService) {}

  ngOnInit() {
    this.alunos = this.as.getAlunos();
  }

}