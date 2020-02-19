import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { InformationComponent } from './init/information/information.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogInUserComponent } from './log-in/log-in-user/log-in-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { InfoUserComponent } from './home-user/info-user/info-user.component';
import { ListBillsComponent } from './home-user/list-bills/list-bills.component';
import { BillDetailsComponent } from './home-user/bill-details/bill-details.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    InformationComponent,
    LogInComponent,
    LogInUserComponent,
    NavBarComponent, 
    HomeUserComponent,
    InfoUserComponent,
    ListBillsComponent,
    BillDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }