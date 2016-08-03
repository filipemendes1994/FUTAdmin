import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { IStudent, Student } from './student';
import { ResponsibleAdult } from './responsibleAdult';
import { ClassT } from '../disciplines/classes/class';
import {DatePipe} from '@angular/common';
import {Observable} from 'rxjs/RX';
import 'rxjs/add/operator/count';

@Injectable()
export class StudentsService {

  students: FirebaseListObservable<IStudent[]>;
  constructor(public af: AngularFire) {
    this.students = this.af.database.list('students');
    console.log("initing service");
  }

  getStudents(): FirebaseListObservable<IStudent[]> {
    return this.students;
  }

  addStudent(student: Student) {
    var datePipe = new DatePipe();
    student.entryDate = datePipe.transform(new Date(), 'yyyy-MM-dd');
    student.responsibleAdult.entryDate = datePipe.transform(new Date(), 'yyyy-MM-dd');
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

  getStudent(id: string): FirebaseObjectObservable<IStudent> {
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

  getStudentsWithoutThis(type: string, keyClass: string) {
    return this.students.map(students =>
       students.filter(student => {
         if (type === 'cc') {
           return true;
         } else {
           if (student.classes[type] === keyClass || student.classes[type] === '') {
             return true;
           } else {
             return false;
           }
         }
        }
      )
    );
  }

  countSudents(){
    var count = 0;
     this.students.map(list => list.length).subscribe(lenght =>  count = lenght);
    return count;
  }

  getStudentsFrom(discipline: string) {
    return this.students.map(students =>
       students.filter(student => {
         if (discipline === 'cc') {
           if (student.classes.cc !== undefined) {
             return true;
           } else {
             return false;
           }
         }
         if (student.classes[discipline] !== '') {
           return true;
         } else {
           return false;
         }
       }
      )
    );
  }
}
