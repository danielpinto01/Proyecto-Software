import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { InformationComponent } from './init/information/information.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogInUserComponent } from './log-in/log-in-user/log-in-user.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListBillsComponent } from './home-user/list-bills/list-bills.component';
import { BillDetail } from './models/BillDetail';
import { BillDetailsComponent } from './home-user/bill-details/bill-details.component';

const routes: Routes = [
  { path: "", redirectTo : "init", pathMatch: "full"},
  {path: "init", component: InitComponent},
  {path: "information", component: InformationComponent},
  {path: "logIn", component: LogInComponent},
  {path: "logInUser", component: LogInUserComponent},
  {path: "home", component: HomeUserComponent, 
    children: [
      {path: "listBills", component: ListBillsComponent} , 
      {path: "billDetails", component: BillDetailsComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }