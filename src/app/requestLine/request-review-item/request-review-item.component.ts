import { Component } from '@angular/core';
import { Request } from 'src/app/request/request.class';
import { RequestLine } from '../requestLine.class';
import { SystemService } from 'src/app/core/system.service';
import { RequestLineService } from '../request-line.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent {

  pageTitle = "Request Review Item";
  tableTitle = "RequestLines";
  request!: Request;
  requestLines!: RequestLine[];
  showVerifyReject: boolean = false;
  requestLine!: RequestLine;
  rejectionReason: string = "";

  constructor(
    private sys: SystemService,
    private reqSvc: RequestService,
    private prodSvc: ProductService,
    private rlSvc: RequestLineService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  approve(requestLine: RequestLine): void {
    this.request.status = "APPROVED";
    this.reqSvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request Approved!");
      },
      error: (err) => {
        console.debug("Error updating Request", err);
      }
     });
  }

  reject(requestLine: RequestLine): void {
    this.showVerifyReject = !this.showVerifyReject;
    this.requestLine = requestLine;
  }

  rejectVerified(requestLine: RequestLine): void {
    this.request.status = "REJECTED";
    this.request.rejectionReason = this.rejectionReason;
    this.reqSvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request Rejected!");
      },
      error: (err) => {
        console.debug("Error updating Request", err);
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
    this.rlSvc.list().subscribe({
      next: (res) => {
        console.debug("RequestLines:", res);
        this.requestLines = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
