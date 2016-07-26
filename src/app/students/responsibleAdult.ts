import {Pessoa} from '../pessoa';

export interface IStudent {
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

export class ResponsibleAdult extends Pessoa implements IStudent {

    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, district?: string, postalCode?: string) {
            super(firstName, lastName, address, email, contact, city, district, postalCode);
    }
}
