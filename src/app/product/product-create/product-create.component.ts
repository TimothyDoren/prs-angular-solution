import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  pageTitle = "Product Create";
  product: Product = new Product();

  constructor(
    private prodSvc: ProductService,
    private router: Router
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
    
  }
}
