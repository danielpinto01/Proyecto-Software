import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { InformationComponent } from './information/information.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogInUserComponent } from './log-in-user/log-in-user.component';

const routes: Routes = [
  { path: "", redirectTo : "init", pathMatch: "full"},
  {path: "init", component: InitComponent},
  {path: "information", component: InformationComponent},
  {path: "logIn", component: LogInComponent},
  {path: "logInUser", component: LogInUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }