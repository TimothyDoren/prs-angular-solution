import { Component } from '@angular/core';
import { RequestLine } from '../requestLine.class';
import { RequestService } from 'src/app/request/request.service';
import { Router } from '@angular/router';
import { RequestLineService } from '../request-line.service';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent {

  requestLine: RequestLine = new RequestLine();
  pageTitle = "RequestLine Created";

  constructor(
    private reqSvc: RequestService,
    private router: Router,
    private rlSvc: RequestLineService
  ){}

  save(): void {
    this.rlSvc.create(this.requestLine).subscribe({
      next: (res) => {
        console.debug("RequestLine Created!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {}
}
