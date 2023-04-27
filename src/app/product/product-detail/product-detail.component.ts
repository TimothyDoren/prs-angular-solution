import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Vendor } from 'src/app/vendor/vendor.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle = "Product Detail";
  showVerifyRemove: boolean = false;
  product!: Product;
  vendor!: Vendor;

  constructor(
    private prodSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private venSvc: VendorService
  ){}

  remove(): void {
    this.showVerifyRemove = !this.showVerifyRemove;
  }

  removeVerified(): void {
    this.prodSvc.remove(this.product.id).subscribe({
      next: (res) => {
        console.debug("Product Removed");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"]);
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
