/* tslint:disable:no-string-literal */

import {Person} from '../person';

//obr
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
    rewarnPerHour: number;
    canGive: boolean[];
}

export class Professor extends Person implements IProfessor {

    public rewarnPerHour: number;
    public canGive: boolean[]; //0 - inst, 1 - fm, 2 - solf, 3 - cc


    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, postalCode?: string, socioNumber?: number,
        entryDate?: Date, birthdayDate?: Date) {
            super(firstName, lastName, address, email, contact, city, postalCode, socioNumber, entryDate, birthdayDate);
            this.canGive = new Array(4);
            for (let i = 0 ; i < 4; i++) {
                this.canGive[i] = false;
            }
    }

}

