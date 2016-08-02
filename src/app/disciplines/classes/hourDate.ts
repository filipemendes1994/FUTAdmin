export class HourDate {

    public hourInit: number;
    public minsInit: number;
    public hourFinit: number;
    public minsFinit: number;
    public weekDay: number;

    constructor(hourInit?: number, minsInit?: number, hourFinit?: number, minsFinit?: number, weekDay?: number) {
    }

    getDiffHour() {
        let total = 0;
        if (this.minsFinit > this.minsInit) {
            total += (this.minsFinit - this.minsInit) * 100 / 60;
        } else {
            total += (this.minsInit - this.minsFinit) * 100 / 60;
        }

        total += this.hourFinit - this.hourInit;
        return total;
    }
}
