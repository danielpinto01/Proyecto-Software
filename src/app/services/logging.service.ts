import { Observable } from 'rxjs';
import { Account } from '../models/Account';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
@Injectable()
export class LogginService {
    constructor(private http:HttpClient){
        
    }

    public getAccount(idUser: number) : Observable<Account>{
        return this.http.get<Account>('http://localhost:8080/electronicInvoicing/webresources/Account/' + idUser);
    }
}