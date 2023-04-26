import { Component } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  pageTitle: string = "Product List";
  products: Product[] = [];
  vendor!: Vendor;

  constructor(
    private sys: SystemService,
    private prodSvc: ProductService,
    private venSvc: VendorService
  ){}

  ngOnInit(): void {
    this.sys.checkLogin();
    if(this.sys.loggedInUser !== null){
      console.log("Someone is Logged in");
    } else {
      console.log("No one is Logged in");
    }
    this.prodSvc.list().subscribe({
      next: (res) => {
        console.debug("Products: ", res);
        this.products = res;
      }, 
      error: (err) => {
        console.error(err);
      }
    })
  }
}

