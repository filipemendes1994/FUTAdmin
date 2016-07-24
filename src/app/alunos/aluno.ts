/* tslint:disable:no-string-literal */

export interface IAluno {
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

export class Aluno implements IAluno {

    firstName: string;
    lastName: string;
    address: string;
    email: string;
    contact: string;
    city: string;
    district: string;
    postalCode: string;

    constructor(firstName?: string, lastName?: string, address?: string, email?: string, contact?: string, city?: string, district?: string, postalCode?: string) {
    }
}