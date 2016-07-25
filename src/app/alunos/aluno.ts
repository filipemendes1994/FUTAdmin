/* tslint:disable:no-string-literal */

import {Pessoa} from '../pessoa';
import {Pagamento} from '../pagamento';

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
    pagamentos: Array<Pagamento>;
}

export class Aluno extends Pessoa implements IAluno {

    public pagamentos: Array<Pagamento>;

    constructor(firstName?: string, lastName?: string, address?: string, email?: string,
        contact?: string, city?: string, district?: string, postalCode?: string) {
            super(firstName, lastName, address, email, contact, city, district, postalCode);
            this.pagamentos = new Array<Pagamento>();
    }
}
