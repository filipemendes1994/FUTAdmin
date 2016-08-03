export class Payment {

    month: number;
    year: number;
    value: number;
    datePayment: any;
    done: boolean;
    constructor(month?: number, year?: number, value?: number, datePayment?: any, done?: boolean) {
        this.month = month;
        this.year = year;
        this.value = value;
        this.done = false;
    }
}
