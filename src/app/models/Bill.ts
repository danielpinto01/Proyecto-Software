import { BillDetail } from './BillDetail';
import { Client } from './client';
import { Account } from './Account';
import { AditionalCharges } from './AditionalCharges';

export class Bill {
    public idInvoice: Number;
    public numInvoice: Number;
    public saleDate: Date;
    public limitPayDate: Date;
    public initialDate: Date;
    public finishDate: Date;
    public details: BillDetail[];
    public aditionalCharges: AditionalCharges[];
    //public account : Account;
}