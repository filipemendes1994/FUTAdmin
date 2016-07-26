/* tslint:disable:no-string-literal */

import {Pessoa} from '../pessoa';

export interface IProfessor {
    $key?: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    contact: string;
    city: string;
    district: string;
    postalCode: string;
}

export class Professor extends Pessoa implements IProfessor {

    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, district?: string, postalCode?: string) {
            super(firstName, lastName, address, email, contact, city, district, postalCode);
    }
}

