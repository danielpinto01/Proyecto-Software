import { Component, OnInit } from '@angular/core';
import { InformationComponent } from '../information/information.component';

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

    // Ocultar la ventana principal
  hideStar(): void {
    // alert("Se ocultara");
    this.hideStarWindow = true;
    this.hideSecondaryWindow = false;
  }

  showAlertMessage():void{
    alert("Aqui se muestra el mensaje");
  }

}