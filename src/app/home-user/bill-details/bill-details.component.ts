import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Bill } from 'src/app/models/Bill';
import { BillDetail } from 'src/app/models/BillDetail';
import html2canvas from 'html2canvas';
import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  @Input('bill') bill: Bill;
  @Input('account') account: Account;
  
  constructor() {
    
  }

  ngOnInit() {
  }

  static showBill() {
    throw new Error("Method not implemented.");
  }
  

  hideBillDetails: boolean = true;
  hideButtonCloseBill : boolean = true;


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