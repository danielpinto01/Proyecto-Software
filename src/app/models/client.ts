export class Client {
    public idClient: Number;
    public cedula: string;
    public nameClient: string;
    public department: string;
    public city: string;
    public address: string;

    constructor(idClient, cedula, nameClient, department, city, address){
        this.idClient = idClient;
        this.cedula = cedula;
        this.nameClient = nameClient;
        this.department = department;
        this.city = city;
        this.address = address;
    }
}