import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  pageTitle = "Product Create";
  product: Product = new Product();
  vendors: Vendor[] = []

  constructor(
    private prodSvc: ProductService,
    private router: Router,
    private venSvc: VendorService
  ){}

  save(): void {
    this.prodSvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Product Created!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.venSvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
