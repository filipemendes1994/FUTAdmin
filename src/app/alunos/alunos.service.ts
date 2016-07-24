import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IAluno, Aluno } from './aluno';

@Injectable()
export class AlunosService {

  alunos:FirebaseListObservable<IAluno[]>;
  constructor(public af: AngularFire) {
    this.alunos = this.af.database.list('alunos');
  }

  getAlunos():FirebaseListObservable<IAluno[]> {
    return this.alunos;
  }

  addAluno(aluno: Aluno) {
    return this.alunos.push(aluno);
  }

}
