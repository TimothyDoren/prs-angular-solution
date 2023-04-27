import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.css']
})
export class ProductChangeComponent {
  pageTitle = "Product Change";
  product!: Product;
  vendor!: Vendor;

  constructor(
    private prodSvc: ProductService,
    private venSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  save(){
    this.prodSvc.change(this.product).subscribe({
      next: (res) => {
        console.debug("Product Changed!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void{
    let id = this.route.snapshot.params["id"];
    this.prodSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.product = res;
        this.venSvc.get(this.product.vendorId).subscribe({
          next: (res) => {
            console.debug("Vendor:", res);
            this.vendor = res;
            this.product.vendor = res;
            this.product.vendorId = this.vendor.id;
            this.product.vendorName = this.vendor.name;
          },
          error: (err) => {
            console.error(err);
          }
        })
      }, 
      error: (err) => {
        console.error(err);
      }
    })
  }

}
