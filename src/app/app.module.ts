import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { InformationComponent } from './information/information.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogInUserComponent } from './log-in-user/log-in-user.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    InformationComponent,
    LogInComponent,
    LogInUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }