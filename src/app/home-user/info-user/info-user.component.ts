import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Account } from 'src/app/models/Account';
import {Router} from '@angular/router'

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  @Input() account: Account;
  
  constructor(private router: Router) {
    if (!sessionStorage.getItem('id')) {
      this.router.navigateByUrl('/logInUser');
    }
  }

  ngOnInit() {
  }

  public closeSession(){
    sessionStorage.removeItem('id');
    this.router.navigateByUrl('/logInUser');
  }
}