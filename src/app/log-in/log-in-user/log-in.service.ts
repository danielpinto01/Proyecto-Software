import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { 
    
  }

  //  logIn(id: number):  Observable<any> {
  //    return this.http.post<any>(HTTP_URL + '/logIn', {id};
  //  }  

  logIn(id: number): boolean{
    return id == 123;
  }  
}
