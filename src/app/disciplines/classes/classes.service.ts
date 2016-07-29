import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { IClassT} from './class';

@Injectable()
export class ClassesService {

  classes: FirebaseListObservable<IClassT[]>;
    constructor(public af: AngularFire) {
  }

  getClasses(type: string) {
    this.classes = this.af.database.list(type);
    return this.classes;
  }

  getClass(type: string, id: string) {
      return this.af.database.object(type + '/' + id);
  }

  filter(term: string){
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
}
