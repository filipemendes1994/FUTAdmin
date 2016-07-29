/* tslint:disable:no-string-literal */

import {Person} from '../person';
import {Payment} from '../payments/payment';
import {ResponsibleAdult} from './responsibleAdult';

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
    entryDate: Date; //obr
    birthdayDate: Date; //obr
    responsibleAdult: ResponsibleAdult; //obr
    payments: Payment[];
    classFm: string;
    classCc: string[];
    classInst: string;
    classSolf: string;
}

export class Student extends Person implements IStudent {

    public responsibleAdult: ResponsibleAdult;
    public payments: Payment[];
    public entryDate: Date;
    public classFm: string;
    public classCc: string[];
    public classInst: string;
    public classSolf: string;

    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, postalCode?: string, socioNumber?: number,
        entryDate?: Date, birthdayDate?: Date) {
            super(firstName, lastName, address, email, contact, city, postalCode, socioNumber, entryDate, birthdayDate);
    }
}
