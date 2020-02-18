import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/Bill';
import { BillDetail } from 'src/app/models/BillDetail';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  bill : Bill; 
  constructor() { 
    this.bill = new Bill('10522660', new Date(), new Date(), new Date(), new Date());
  }

  ngOnInit() {
  }

}
