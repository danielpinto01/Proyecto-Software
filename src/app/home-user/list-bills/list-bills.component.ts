import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bill } from 'src/app/models/Bill';

@Component({
  selector: 'app-list-bills',
  templateUrl: './list-bills.component.html',
  styleUrls: ['./list-bills.component.css']
})
export class ListBillsComponent implements OnInit {
  listBills : Bill[] = [];
  @Output() chooseBillEvent = new EventEmitter<Bill>();  
  constructor() { 
    this.listBills.push(new Bill('10', new Date(), new Date(), new Date(), new Date()));
    this.listBills.push(new Bill('11', new Date(), new Date(), new Date(), new Date()));
    this.listBills.push(new Bill('12', new Date(), new Date(), new Date(), new Date()));
    this.listBills.push(new Bill('13', new Date(), new Date(), new Date(), new Date()));
    this.listBills.push(new Bill('14', new Date(), new Date(), new Date(), new Date()));
    this.listBills.push(new Bill('15', new Date(), new Date(), new Date(), new Date()));
  }

  sendBillChosen(bill: Bill) {
    console.log('Hola mundo ' + bill.numBill);
    this.chooseBillEvent.emit(bill);
  }

  ngOnInit() {
  }
  

}
