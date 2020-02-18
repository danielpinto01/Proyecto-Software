import { Component, OnInit } from '@angular/core';

import { InformationComponent } from './information/information.component';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  hideStarWindow: boolean = false;
  hideSecondaryWindow: boolean = true;

  constructor() { 
  }

  ngOnInit() {
  }

  showAlertMessage():void{
    alert("Aqui se muestra el mensaje");
  }
}