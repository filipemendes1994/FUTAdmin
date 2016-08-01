export class Payment {

    month: string;
    year: string;
    value: string;
    datePayment: any;
    done: boolean;
    constructor(month?: string, year?: string, value?: string, datePayment?: any, done?: boolean) {
        this.done = false;
    }
}
