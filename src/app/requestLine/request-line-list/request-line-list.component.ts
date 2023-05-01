import { Component } from '@angular/core';
import { Request } from '../../request/request.class'
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from 'src/app/request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLine } from '../requestLine.class';
import { RequestLineService } from '../request-line.service';

@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent {

  pageTitle = "Requests";
  showVerifyRemove: boolean = false;
  request!: Request;
  requestLines!: RequestLine[];
  requestLine!: RequestLine;
  tableTitle = "RequestLines";

  constructor(
    private sys: SystemService,
    private reqSvc: RequestService,
    private rlSvc: RequestLineService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  review(): void {
   if(this.request.total > 50){
    this.request.status = "REVIEW";
   }
   else if (this.request.total <= 50) {
    this.request.status = "APPROVED";
   }
   this.reqSvc.change(this.request).subscribe({
    next: (res) => {
      console.debug("Request Status Changed!");
    },
    error: (err) => {
      console.debug("Error updating Request", err);
    }
   })
  }

  remove(requestLine: RequestLine): void {
    this.showVerifyRemove = !this.showVerifyRemove;
    this.requestLine = requestLine;
  }

  removeVerified(requestLine: RequestLine): void {
    this.rlSvc.remove(this.requestLine.id).subscribe({
      next: (res) => {
        console.debug("RequestLine Removed!");
        this.router.navigateByUrl(`/requestLine/list/${this.request.id}`);
      },
      error: (err) => {
        console.error(err);
      }
    })
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
