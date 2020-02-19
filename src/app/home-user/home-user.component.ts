import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../models/client';
import { Bill } from '../models/Bill';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css'],
})
export class HomeUserComponent implements OnInit {
  clientLogged : Client = new Client(1, 1053, 'Andres Flórez'); 
  actualBill: Bill = new Bill('15', new Date(), new Date(), new Date, new Date());
  constructor() { }

  ngOnInit() {
  }

  receiveBillChosen(bill: Bill){
    console.log('Recibio factura ',  bill);
    this.actualBill = bill;
  }
}
