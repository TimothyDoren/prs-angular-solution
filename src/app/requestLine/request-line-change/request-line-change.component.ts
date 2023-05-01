import { Component } from '@angular/core';
import { RequestLine } from '../requestLine.class';
import { Request } from '../../request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { RequestLineService } from '../request-line.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-request-line-change',
  templateUrl: './request-line-change.component.html',
  styleUrls: ['./request-line-change.component.css']
})
export class RequestLineChangeComponent {
  requestLine: RequestLine = new RequestLine();
  requests!: Request[];
  request: Request = new Request();
  products: Product[] = [];
  pageTitle = "RequestLine Change";

  constructor(
    private reqSvc: RequestService,
    private rlSvc: RequestLineService,
    private router: Router,
    private route: ActivatedRoute,
    private prodSvc: ProductService
  ){}

  save(): void {
    console.debug("Before Change:", this.requestLine);
    this.rlSvc.change(this.requestLine).subscribe({
      next: (res) => {
        console.debug("RequestLine Changed!");
        this.router.navigateByUrl(`requestLine/list/${this.requestLine.requestId}`);
        },
        error: (err) => {
          console.error(err);
        }
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.rlSvc.get(id).subscribe({
      next: (res) => {
        console.debug("RequestLine:", res);
        this.requestLine = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    this.prodSvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
