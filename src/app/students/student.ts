/* tslint:disable:no-string-literal */

import {Person} from '../person';
import {Payment} from './payments/payment';
import {ResponsibleAdult} from './responsibleAdult';
import {Disciplines} from '../disciplines/disciplines';

export interface IStudent {
    $key?: string;
    firstName: string; //obr
    lastName: string; //obr
    address: string; //obr
    email: string;
    contact: string;
    city: string;
    postalCode: string; //obr
    socioNumber: number; //obr
    entryDate: number; //obr
    birthdayDate: Date; //obr
    responsibleAdult: ResponsibleAdult; //obr
    payments: Payment[];
    classes: Disciplines;
}

export class Student extends Person implements IStudent {

    public responsibleAdult: ResponsibleAdult;
    public payments: Payment[];
    public entryDate: number;
    public classes: Disciplines;
    
    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, postalCode?: string, socioNumber?: number,
        entryDate?: number, birthdayDate?: Date) {
            super(firstName, lastName, address, email, contact, city, postalCode, socioNumber, entryDate, birthdayDate);
            this.classes = new Disciplines();
    }
}
