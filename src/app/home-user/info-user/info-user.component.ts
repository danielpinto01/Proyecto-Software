import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  client: Client;
  
  constructor() {
    this.client = new Client(1, 1053, 'Andres Flórez', 'Boyacá', 'Paipa', 'D28#13');
  }

  ngOnInit() {
  }

}
