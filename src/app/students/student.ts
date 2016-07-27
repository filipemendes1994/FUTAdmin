/* tslint:disable:no-string-literal */

import {Person} from '../person';
import {Payment} from '../payments/payment';
import {ResponsibleAdult} from './responsibleAdult';

export interface IStudent {
    $key?: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    contact: string;
    city: string;
    postalCode: string;
    socioNumber: number;
    entryDate: Date;
    birthdayDate: Date;
    responsibleAdult: ResponsibleAdult;
    payments: Payment[];
}

export class Student extends Person implements IStudent {

    public responsibleAdult: ResponsibleAdult;
    public payments: Payment[];
    public entryDate: Date;

    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, postalCode?: string, socioNumber?: number,
        entryDate?: Date, birthdayDate?: Date) {
            super(firstName, lastName, address, email, contact, city, postalCode, socioNumber, entryDate, birthdayDate);
    }
}
