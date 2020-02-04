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

  // Ocultar la ventana principal
  hideStar(): void {
    // alert("Se ocultara");
    this.hideStarWindow = true;
    this.hideSecondaryWindow = false;
  }

  // Mostrar la ventana principal
  showStar(): void {
    this.hideStarWindow = false;
    this.hideSecondaryWindow = true;
  }

  //Ocultar la ventana secundaria
  hideSecondary():void{
    this.hideSecondaryWindow = true;
    this.hideLogInUAWindow = false;
  }

  showSecondary():void{
    this.hideSecondaryWindow = false;
    this.hideLogInUAWindow = true;
  }

  hideLogInUA():void{
    this.hideLogInUAWindow = true;
    this.hideLogInUserWindow = false;
  }

  showLogInUA():void{
    this.hideLogInUAWindow = false;
    this.hideLogInUserWindow = true;
  }

}