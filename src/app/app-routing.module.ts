import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { RequestListComponent } from './request/request-list/request-list.component';

const routes: Routes = [

  { path: "", redirectTo: "/user/login", pathMatch: "full" },

  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "user/list", component: UserListComponent},
  { path: "user/login", component: UserLoginComponent },
  { path: "user/detail/:id", component: UserDetailComponent},
  { path: "user/change/:id", component: UserChangeComponent},
  { path: "user/create", component: UserCreateComponent},
  { path: "vendor/list", component: VendorListComponent},
  { path: "vendor/detail", component: VendorDetailComponent},
  { path: "vendor/create", component: VendorCreateComponent},
  { path: "vendor/change", component: VendorChangeComponent},
  { path: "request/list", component: RequestListComponent},

  { path: "**", component: E404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
