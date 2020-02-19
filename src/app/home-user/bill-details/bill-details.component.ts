import { Component, OnInit, Input } from '@angular/core';
import { Bill } from 'src/app/models/Bill';
import { BillDetail } from 'src/app/models/BillDetail';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  @Input() bill : Bill; 
  constructor() {
      console.log(this.bill); 
  }

  ngOnInit() {
  }

}
