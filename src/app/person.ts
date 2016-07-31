export class Person {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    contact: string;
    city: string;
    postalCode: string;
    socioNumber: number;
    entryDate: number;
    birthdayDate: Date;

    constructor(firstName?: string, lastName?: string, address?: string,
        email?: string, contact?: string, city?: string, postalCode?: string,
        socioNumber?: number, entryDate?: number, birthdayDate?: Date) {
    }
}
