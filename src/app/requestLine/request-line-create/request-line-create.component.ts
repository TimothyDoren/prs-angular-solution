import { Component } from '@angular/core';
import { RequestLine } from '../requestLine.class';
import { RequestService } from 'src/app/request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLineService } from '../request-line.service';
import { Request } from '../../request/request.class'
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent {

  requestLine: RequestLine = new RequestLine();
  pageTitle = "RequestLine Created";
  request: Request = new Request;
  products: Product[] = [];

  constructor(
    private reqSvc: RequestService,
    private router: Router,
    private rlSvc: RequestLineService,
    private route: ActivatedRoute,
    private prodSvc: ProductService
  ){}

  save(): void {
    this.requestLine.requestId = this.request.id;
    this.rlSvc.create(this.requestLine).subscribe({
      next: (res) => {
        console.debug("RequestLine Created!");
        this.router.navigateByUrl(`requestLine/list/${this.requestLine.requestId}`);
        },
        error: (err) => {
          console.error(err);
        }
    });
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.reqSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
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
