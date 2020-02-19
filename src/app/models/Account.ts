import { Client } from './client';
import { Place } from './Place';

export class Account {
    public idAccount: string;
    public accountNumber: string;
    public address: string;
    public client: Client;
    public place : Place; 
}