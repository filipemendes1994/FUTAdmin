/* tslint:disable:no-string-literal */

import {Person} from '../person';

export interface IProfessor {
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
    discipline: string;
    rewarnPerHour: number;
}

export class Professor extends Person implements IProfessor {

    public discipline: string;
    public rewarnPerHour: number;

    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, postalCode?: string, socioNumber?: number,
        entryDate?: Date, birthdayDate?: Date) {
            super(firstName, lastName, address, email, contact, city, postalCode, socioNumber, entryDate, birthdayDate);
    }
}

