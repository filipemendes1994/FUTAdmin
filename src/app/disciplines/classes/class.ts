import {Student} from '../../students/student';
import {HourDate} from './hourDate';

export interface IClassT {
    $key?: string;
    name: string;
    professor: string;
    timeSchedule: HourDate;
    numberStudents: number;
}

export class ClassT implements IClassT {

    public name: string;
    public professor: string;
    public timeSchedule: HourDate;
    public numberStudents: number;
    constructor() {
        this.numberStudents = 0;
    }
}

