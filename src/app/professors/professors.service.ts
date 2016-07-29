import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { IProfessor, Professor } from './professor';

@Injectable()
export class ProfessorsService {

  professors:FirebaseListObservable<IProfessor[]>;
  constructor(public af: AngularFire) {
    this.professors = this.af.database.list('professors');
  }

  getProfessors(): FirebaseListObservable<IProfessor[]> {
    return this.professors;
  }

  addProfessor(professor: Professor) {
    console.log(professor);
    return this.professors.push(professor);
  }

  editProfessor(professorObservable: FirebaseObjectObservable<IProfessor>, professor: Professor) {
    console.log('saving');
    console.log(professor);
    return professorObservable.update({
      address: professor.address,
      city: professor.city,
      contact: professor.contact,
      email: professor.email,
      firstName: professor.firstName,
      lastName: professor.lastName,
      postalCode: professor.postalCode,
      socioNumber: professor.socioNumber,
      entryDate: professor.entryDate,
      birthdayDate: professor.birthdayDate,
      canGive: professor.canGive,
      rewarnPerHour: professor.rewarnPerHour,
    });
  }

  getProfessor(id: number | string): FirebaseObjectObservable<IProfessor>
  {
      return this.af.database.object('professors/' + id);
  }

  deleteProfessor(key: string)
  {
    this.af.database.object('professors/' + key).remove();
  }

   filter(term: string) {
    return this.professors.map(professors =>
       professors.filter(professor => {
          return professor.firstName.indexOf(term) >= 0 ? true : false;
        }
      )
    );
  }
}