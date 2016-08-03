export interface IReport {
    createdAt: Date;
    subject?: string;
    description?: string;
}
export class Report implements IReport{
    public createdAt: Date;

    constructor(public subject?: string, public description?: string) {
        this.createdAt = new Date();
    }
}