import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.css']
})
export class ProductChangeComponent {
  pageTitle = "Product Change";
  product!: Product;

  constructor(
    private prodSvc: ProductService,
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
      }, 
      error: (err) => {
        console.error(err);
      }
    })
  }

}
