import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAdministratorComponent } from './home-administrator/home-administrator.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { InitComponent } from './init/init.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAdministratorComponent,
    HomeClientComponent,
    InitComponent
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
