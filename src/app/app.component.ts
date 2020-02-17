import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ProyectoSoftware';

  hideStarWindow: boolean = false;
  hideSecondaryWindow: boolean = true;
  hideLogInUAWindow: boolean = true;
  hideLogInUserWindow: boolean  = true;

  showAlertMessage():void{
    alert("Aqui se muestra el mensaje");
  }
}