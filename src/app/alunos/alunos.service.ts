import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { IAluno, Aluno } from './aluno';
import { ResponsibleAdult } from './responsibleAdult';

@Injectable()
export class AlunosService {

  alunos:FirebaseListObservable<IAluno[]>;
  constructor(public af: AngularFire) {
    this.alunos = this.af.database.list('alunos');
  }

  getAlunos(): FirebaseListObservable<IAluno[]> {
    return this.alunos;
  }

  addAluno(aluno: Aluno) {
    console.log(aluno);
    return this.alunos.push(aluno);
  }

  editAluno(alunoObservable: FirebaseObjectObservable<IAluno>, aluno: Aluno) {
    return alunoObservable.update({
      address: aluno.address,
      city: aluno.city,
      contact: aluno.contact,
      district: aluno.district,
      email: aluno.email,
      firstName: aluno.firstName,
      lastName: aluno.lastName,
      postalCode: aluno.postalCode,
      responsibleAdult: aluno.responsibleAdult === undefined ? new ResponsibleAdult() : aluno.responsibleAdult,
      pagamentos: aluno.pagamentos === undefined ? [] : aluno.pagamentos
    });
  }

  getAluno(id: number | string): FirebaseObjectObservable<IAluno>
  {
      return this.af.database.object('alunos/' + id);
  }

  deleteAluno(key: string)
  {
    this.af.database.object('alunos/' + key).remove();
  }
}
