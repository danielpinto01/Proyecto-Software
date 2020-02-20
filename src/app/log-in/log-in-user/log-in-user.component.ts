import { Component, OnInit } from '@angular/core';
import { LogInService } from './log-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in-user',
  templateUrl: './log-in-user.component.html',
  styleUrls: ['./log-in-user.component.css']
})
export class LogInUserComponent implements OnInit {

  id: number;

  constructor(private logInService: LogInService, private router: Router) {
    if (sessionStorage.getItem('id')) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

  showAlertMessage():void{
    alert("Telecorp");
  }

  logIn():void{
    var x = this.logInService.logIn(this.id);
    if(x){
      sessionStorage.setItem("id", JSON.stringify(x));
      this.router.navigate(['/home']);
    }else{
      alert('Contraseña incorrecta');
    }
  }
}