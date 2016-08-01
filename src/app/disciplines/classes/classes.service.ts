import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { ClassT, IClassT} from './class';
import {HourDate} from './hourDate';

@Injectable()
export class ClassesService {

  classes: FirebaseListObservable<IClassT[]>;
    constructor(public af: AngularFire) {
  }

  getClasses(type: string) {
    this.classes = this.af.database.list(type);
    return this.classes;
  }

  getClass(type: string, id: string): FirebaseObjectObservable<IClassT> {
      return this.af.database.object(type + '/' + id);
  }

  filter(term: string) {
    return this.classes.map(classes =>
       classes.filter(classT =>
        {
          if (classT.name.indexOf(term) >= 0) {
            return true;
          } else {
            return false;
          }
        }
      )
    );
  }

  addClass(classT: ClassT, type: string) {
    this.getClasses(type).push(classT);
  }

  editClass(classTObservable: FirebaseObjectObservable<IClassT>, classT: ClassT) {
    return classTObservable.update({
      name: classT.name,
      professor: classT.professor,
      timeSchedule: (classT.timeSchedule === undefined ? new HourDate() : classT.timeSchedule),
      students: (classT.students === undefined ? new Array() : classT.students),
    });
  }
}
