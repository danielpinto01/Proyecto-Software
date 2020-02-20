import { Client } from './Client';
import { Place } from './Place';

export class Account {
    public idAccount: Number;
    public accountNumber: Number;
    public address: string;
    public client: Client;
    public place : Place; 
}