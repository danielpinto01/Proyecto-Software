import { BillDetail } from './BillDetail';

export class Bill {
    public numBill: string;
    public dateBill: Date;
    public dateTimely: Date;
    public initPeriod: Date;
    public endPeriod: Date;
    public details: BillDetail;

    constructor(numBill: string, dateBill: Date, dateTimely: Date, initPeriod: Date, endPeriod: Date) {
        this.numBill = numBill;
        this.dateBill = dateBill;
        this.dateTimely = dateTimely;
        this.initPeriod = initPeriod;
        this.endPeriod = endPeriod;
    }

    

}