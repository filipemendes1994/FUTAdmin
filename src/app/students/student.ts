/* tslint:disable:no-string-literal */

import {Pessoa} from '../pessoa';
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
    district: string;
    postalCode: string;
    responsibleAdult: ResponsibleAdult;
    payments: Payment[];
}

export class Student extends Pessoa implements IStudent {

    public responsibleAdult: ResponsibleAdult;
    public payments: Payment[];

    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, district?: string, postalCode?: string) {
            super(firstName, lastName, address, email, contact, city, district, postalCode);
    }
}
