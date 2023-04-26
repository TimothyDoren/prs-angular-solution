import { Component } from '@angular/core';
import { Request } from '../request.class'
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {

  pageTitle = "Request List";
  requests: Request[] = [];

  constructor(
    private sys: SystemService,
    private reqSvc: RequestService
  ){}

  ngOnInit(): void {
    this.sys.checkLogin();
    if(this.sys.loggedInUser !== null){
      console.log("Someone is Logged in");
    } else {
      console.log("No one is Logged in");
    }
    this.reqSvc.list().subscribe({
      next: (res) => {
        console.debug("Requests: ", res);
        this.requests = res;
      }, 
      error: (err) => {
        console.error(err);
      }
    })
  }

}
