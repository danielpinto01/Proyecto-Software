import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/Bill';

@Component({
  selector: 'app-list-bills',
  templateUrl: './list-bills.component.html',
  styleUrls: ['./list-bills.component.css']
})
export class ListBillsComponent implements OnInit {
  listBills : Bill[] = [];

  constructor() { 
    this.listBills.push(new Bill('10522660', new Date(), new Date(), new Date(), new Date()));
    this.listBills.push(new Bill('10522660', new Date(), new Date(), new Date(), new Date()));
    this.listBills.push(new Bill('10522660', new Date(), new Date(), new Date(), new Date()));
    this.listBills.push(new Bill('10522660', new Date(), new Date(), new Date(), new Date()));
    this.listBills.push(new Bill('10522660', new Date(), new Date(), new Date(), new Date()));
    this.listBills.push(new Bill('10522660', new Date(), new Date(), new Date(), new Date()));
  }

  ngOnInit() {
  }
}