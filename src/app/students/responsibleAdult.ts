import {Person} from '../person';

export interface IStudent {
    $key?: string;
    firstName: string; //obr
    lastName: string; //obr
    address: string; //obr
    email: string;
    contact: string; //obr
    city: string; //obr
    postalCode: string; //obr
    socioNumber: number; //obr
    entryDate: Date; //obr
    birthdayDate: Date; //obr
}

export class ResponsibleAdult extends Person implements IStudent {

    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, postalCode?: string, socioNumber?: number, entryDate?: Date, birthdayDate?: Date) {
            super(firstName, lastName, address, email, contact, city, postalCode, socioNumber, entryDate, birthdayDate);
    }
}
