import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';
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
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RequestLineListComponent } from './requestLine/request-line-list/request-line-list.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    UserListComponent,
    UserLoginComponent,
    UserDetailComponent,
    UserChangeComponent,
    UserCreateComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorChangeComponent,
    RequestListComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductChangeComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestChangeComponent,
    RequestLineListComponent,
    RequestReviewComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
