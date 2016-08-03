import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IReport, Report} from './report';

@Injectable()
export class ReportService {
    reportsList: FirebaseListObservable<Report[]>;
    constructor(public af: AngularFire) {
        this.reportsList = this.af.database.list('reports');
     }

    report(report:Report){
        this.reportsList.push(report);
    }

}