import {Person} from '../person';

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
}

export class ResponsibleAdult extends Person implements IStudent {

    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, postalCode?: string, socioNumber?: number, entryDate?: Date, birthdayDate?: Date) {
            super(firstName, lastName, address, email, contact, city, postalCode, socioNumber, entryDate, birthdayDate);
    }
}
