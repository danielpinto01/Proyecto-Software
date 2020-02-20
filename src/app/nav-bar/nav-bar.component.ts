import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) {
    if (!sessionStorage.getItem('id')) {
      this.router.navigateByUrl('/home');
    }
   }

  ngOnInit() {
  }

  public closeSession(){
    sessionStorage.removeItem('id');
    this.router.navigateByUrl('/logInUser');
  }
}