import {Student} from '../../students/student';
import {HourDate} from './hourDate';

export interface IClassT {
    $key?: string;
    name: string;
    professor: string;
    timeSchedule: HourDate;
    students: string[];
}

export class ClassT implements IClassT {

    public name: string;
    public professor: string;
    public students: string[];
    public timeSchedule: HourDate;

    constructor() {
    }
}

