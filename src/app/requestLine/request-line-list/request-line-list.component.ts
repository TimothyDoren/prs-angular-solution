import { Component } from '@angular/core';
import { Request } from '../../request/request.class'
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from 'src/app/request/request.service';
import { ActivatedRoute } from '@angular/router';
import { RequestLine } from '../requestLine.class';

@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent {

  pageTitle = "Request Lines";
  request!: Request;
  requestLines!: RequestLine[];

  constructor(
    private sys: SystemService,
    private reqSvc: RequestService,
    private route: ActivatedRoute
  ){}

  review(): void {}

  remove(requestLine: RequestLine): void {}
  
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
    })
  }
}
