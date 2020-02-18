import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { InformationComponent } from './init/information/information.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogInUserComponent } from './log-in/log-in-user/log-in-user.component';
import { HomeUserComponent } from './home-user/home-user.component';

const routes: Routes = [
  { path: "", redirectTo : "init", pathMatch: "full"},
  {path: "init", component: InitComponent},
  {path: "information", component: InformationComponent},
  {path: "logIn", component: LogInComponent},
  {path: "logInUser", component: LogInUserComponent},
  {path: "home", component: HomeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }