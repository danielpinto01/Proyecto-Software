import { Place } from './Place';

export class Client {
    public idClient: Number;
    public cedula: string;
    public nameClient: string;
    public place: Place;
    
    constructor(idClient, cedula, nameClient){
        this.idClient = idClient;
        this.cedula = cedula;
        this.nameClient = nameClient;
    }
}