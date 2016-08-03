import {Person} from '../person';

export class ResponsibleAdult extends Person {

    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, postalCode?: string, socioNumber?: number, entryDate?: string, birthdayDate?: string) {
            super(firstName, lastName, address, email, contact, city, postalCode, socioNumber, entryDate, birthdayDate);
    }
}
