import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { User } from './user/user.class';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [

  { path: "", redirectTo: "user/list", pathMatch: "full" },

  { path: "/home", component: HomeComponent },
  { path: "/about", component: AboutComponent },
  { path: "**", component: E404Component},
  { path: "user/list", component: UserListComponent},
  {path: "user/login", component: UserLoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
