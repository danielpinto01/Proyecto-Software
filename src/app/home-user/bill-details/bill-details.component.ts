import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Bill } from 'src/app/models/Bill';
import { BillDetail } from 'src/app/models/BillDetail';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  static showBill() {
    throw new Error("Method not implemented.");
  }
  bill: Bill;

  hideBillDetails: boolean = true;
  hideButtonCloseBill : boolean = true;

  constructor() {
    this.bill = new Bill('10522660',  new Date(), new Date(), new Date(), new Date());
    this.bill.details = { valueTv: 5000, valueInterner: 7000, valueLongDistance: 4000, valueLandLina: 8200, valueMagazine: 4200, 
      valueMobile: 8000 };
    this.bill.client = { idClient: 12345, cedula: 'cc123', nameClient: 'Andres', department:'Boyaca', city: 'Paipa', address: 'D28#13'}
  }

  ngOnInit() {
  }

  savePrint(id): void {
    alert("Aqui se muestra el mensaje");
    let self = this;
    html2canvas(document.getElementById(id)).then(canvas => {
    var imgData = canvas.toDataURL("image/png");
    let a = document.createElement('a');
    a.href = imgData;
    a.download = `abill.png`;
    a.click();
    });
  }

  hideBill(): void{
    this.hideBillDetails = true;
    this.hideButtonCloseBill = true;
  }

  showBill(): void{
    this.hideBillDetails = false;
    this.hideButtonCloseBill = false;
  }
}