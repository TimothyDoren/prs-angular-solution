import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle = "Product Detail";
  showVerifyRemove: boolean = false;
  product!: Product;

  constructor(
    private prodSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
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
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
