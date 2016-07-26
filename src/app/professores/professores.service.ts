import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { IProfessor, Professor } from './professor';

@Injectable()
export class ProfessoresService {

  professores:FirebaseListObservable<IProfessor[]>;
  constructor(public af: AngularFire) {
    this.professores = this.af.database.list('professores');
  }

  getProfessores(): FirebaseListObservable<IProfessor[]> {
    return this.professores;
  }

  addProfessor(professor: Professor) {
    console.log(professor);
    return this.professores.push(professor);
  }

  editProfessor(professorObservable: FirebaseObjectObservable<IProfessor>, professor: Professor) {
    console.log('saving');
    console.log(professor);
    return professorObservable.update({
      address: professor.address,
      city: professor.city,
      contact: professor.contact,
      district: professor.district,
      email: professor.email,
      firstName: professor.firstName,
      lastName: professor.lastName,
      postalCode: professor.postalCode,
    });
  }

  getProfessor(id: number | string): FirebaseObjectObservable<IProfessor>
  {
      return this.af.database.object('professores/' + id);
  }

  deleteProfessor(key: string)
  {
    this.af.database.object('professores/' + key).remove();
  }
}