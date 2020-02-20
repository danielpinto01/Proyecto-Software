import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Bill } from 'src/app/models/Bill';

@Component({
  selector: 'app-list-bills',
  templateUrl: './list-bills.component.html',
  styleUrls: ['./list-bills.component.css']
})
export class ListBillsComponent implements OnInit {
  listBills: Bill[] = [];
  @Output() chooseBillEvent = new EventEmitter<Bill>();

  constructor() {
    this.listBills.push({
      idInvoice: 15, numInvoice: 15, saleDate: new Date(), limitPayDate: new Date(),
      initialDate: new Date(), finishDate: new Date(),
      details: [{ idDetails: 1, quantity: 8, value: 8000, product: { idProduct: 1, nameProduct: "TV", valueProduct: 7000 }, }],
      aditionalCharges: [{ idAdditionalService: 5, nameService: "Soporte", valueService: 7000 },
        { idAdditionalService: 7, nameService: "Ampliacion", valueService: 8000 }, 
        { idAdditionalService: 7, nameService: "Ampliacion", valueService: 8000 },
        { idAdditionalService: 7, nameService: "Ampliacion", valueService: 8000 },
        { idAdditionalService: 7, nameService: "Ampliacion", valueService: 8000 },
        { idAdditionalService: 7, nameService: "Ampliacion", valueService: 8000 },
        { idAdditionalService: 7, nameService: "Ampliacion", valueService: 8000 },
        { idAdditionalService: 7, nameService: "Ampliacion", valueService: 8000 }
      ]
    });
    this.listBills.push({
      idInvoice: 16, numInvoice: 25, saleDate: new Date(), limitPayDate: new Date(),
      initialDate: new Date, finishDate: new Date(),
      details: [{ idDetails: 5, quantity: 8, value: 8000, product: { idProduct: 1, nameProduct: "Internet", valueProduct: 7000 } }],
      aditionalCharges: [{ idAdditionalService: 7, nameService: "Ampliacion", valueService: 8000 }]
    });
    this.listBills.push({
      idInvoice: 17, numInvoice: 35, saleDate: new Date(), limitPayDate: new Date(),
      initialDate: new Date, finishDate: new Date(),
      details: [{ idDetails: 4, quantity: 8, value: 8000, product: { idProduct: 1, nameProduct: "TV", valueProduct: 7000 } }],
      aditionalCharges: [{ idAdditionalService: 9, nameService: "Queja", valueService: 15000 }]
    });
  }

  sendBillChosen(bill: Bill) {
    console.log('Hola mundo ' + bill.numInvoice);
    this.chooseBillEvent.emit(bill);
  }

  ngOnInit() {
  }
}