import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  @Input() client: Client;
  
  constructor() {
  }

  ngOnInit() {
  }

}
