import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Bill } from '../models/Bill';

@Injectable()

export class ServiceBills {
    constructor(private http:HttpClient){
        
    }

    public getBillsUser(idUser: number) : Observable<Bill>{
        return this.http.get<Bill>('http://localhost:8080/electronicInvoicing/webresources/Invoice/' + idUser);
    }
    public getBill(){
        this.getBillsUser(1).subscribe(
            res => { 
                console.log(res);
            },
            err => { 
                console.log(err);
            }
        )
    }

}