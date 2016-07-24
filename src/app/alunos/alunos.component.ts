import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Aluno } from './aluno';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'app-alunos',
  directives: [ MD_LIST_DIRECTIVES ],
  providers: [AlunosService],
  templateUrl: 'alunos.component.html',
  styleUrls: ['alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: FirebaseListObservable<Aluno[]>;
  constructor(public as: AlunosService) {}

  ngOnInit() {
    this.alunos = this.as.getAlunos();
  }

}
