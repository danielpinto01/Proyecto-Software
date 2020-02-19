import { Observable } from 'rxjs';
import { Account } from '../models/Account';

export class LogginService {
    public getAccount(idUser: number) : Observable<Account>{
        return this.http.get<Account>('http://localhost:8080/electronicInvoicing/webresources/Account/' + idUser);
    }
}