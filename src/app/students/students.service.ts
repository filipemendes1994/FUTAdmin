import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { IStudent, Student } from './student';
import { ResponsibleAdult } from './responsibleAdult';

@Injectable()
export class StudentsService {

  students: FirebaseListObservable<IStudent[]>;
  constructor(public af: AngularFire) {
    this.students = this.af.database.list('students');
  }

  getStudents(): FirebaseListObservable<IStudent[]> {
    return this.students;
  }

  addStudent(student: Student) {
    return this.students.push(student);
  }

  editStudent(studentObservable: FirebaseObjectObservable<IStudent>, student: Student) {
    console.log('saving');
    console.log(student);
    return studentObservable.update({
      address: student.address,
      city: student.city,
      contact: student.contact,
      email: student.email,
      firstName: student.firstName,
      lastName: student.lastName,
      postalCode: student.postalCode,
      socioNumber: student.socioNumber,
      entryDate: student.entryDate,
      birthdayDate: student.birthdayDate,
      responsibleAdult: student.responsibleAdult === undefined ? new ResponsibleAdult() : student.responsibleAdult,
      payments: student.payments === undefined ? [] : student.payments,
      classes: student.classes,
    });
  }

  getStudent(id: number | string): FirebaseObjectObservable<IStudent> {
      return this.af.database.object('students/' + id);
  }

  deleteStudent(key: string) {
    this.af.database.object('students/' + key).remove();
  }

  filter(term: string) {
    return this.students.map(students =>
       students.filter(student => {
          if (student.firstName.indexOf(term) >= 0 || student.lastName.indexOf(term) >= 0) {
            return true;
          } else {
            return false;
          }
        }
      )
    );
  }

  getStudentsWithoutThis(type: number) {
    return this.students.map(students =>
       students.filter(student => {
         if (type === 3) {
           return true;
         } else {
           if (student.classes === undefined) {
             return true;
           } else {
             return student.classes[type];
           }
         }
        }
      )
    );

  }
}
