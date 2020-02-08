import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdministratorComponent } from './home-administrator/home-administrator.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { InformationComponent } from './information/information.component';


const routes: Routes = [
  {
     path: "", redirectTo : "init", pathMatch: "full"
  }
  ,{
    path: "init", component: InitComponent
  },
  {
    path: "information", component: InformationComponent
  },
  {
    path: "home", component: HomeAdministratorComponent
  },
  {
    path: "homeClient", component: HomeClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
