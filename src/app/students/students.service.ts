import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { IStudent, Student } from './student';
import { ResponsibleAdult } from './responsibleAdult';

@Injectable()
export class StudentsService {

  students:FirebaseListObservable<IStudent[]>;
  constructor(public af: AngularFire) {
    this.students = this.af.database.list('students');
  }

  getStudents(): FirebaseListObservable<IStudent[]> {
    return this.students;
    
  }



  addStudent(student: Student) {
    console.log(student);
    return this.students.push(student);
  }

  editStudent(studentObservable: FirebaseObjectObservable<IStudent>, student: Student) {
    console.log('saving');
    console.log(student);
    return studentObservable.update({
      address: student.address,
      city: student.city,
      contact: student.contact,
      district: student.district,
      email: student.email,
      firstName: student.firstName,
      lastName: student.lastName,
      postalCode: student.postalCode,
      responsibleAdult: student.responsibleAdult === undefined ? new ResponsibleAdult() : student.responsibleAdult,
      payments: student.payments === undefined ? [] : student.payments
    });
  }

  getStudent(id: number | string): FirebaseObjectObservable<IStudent>
  {
      return this.af.database.object('students/' + id);
  }

  deleteStudent(key: string)
  {
    this.af.database.object('students/' + key).remove();
  }
}