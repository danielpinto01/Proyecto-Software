import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../models/client';
import { Bill } from '../models/Bill';
import { Account } from '../models/Account';
import {Location} from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css'],
})
export class HomeUserComponent implements OnInit {
  accountLogged : Account = { accountNumber: 10, address: "Diadonal5", 
        client: { cedula: "1053", idClient: 15, nameClient: "Andres", place: { idPlace: 8, namePlace: "Paipa", typePlace: "CIUDAD"}}, 
        idAccount: 8, 
        place:{ idPlace: 8, namePlace: "Paipa", typePlace: "CIUDAD"}};
  actualBill: Bill;  
        
  constructor(private location: Location, private router: Router) { 
    if (!sessionStorage.getItem('id')) {
      this.router.navigateByUrl('/logInUser');
    }
  }

  ngOnInit() {
  }

  receiveBillChosen(bill: Bill){
    console.log('Recibio factura ',  bill);
    console.log('Cuenta', this.accountLogged);
    this.actualBill = bill;
  }
}