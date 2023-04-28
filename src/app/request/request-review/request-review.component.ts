import { Component } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class'

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {

  pageTitle = "Requests in Reviews";
  requests!: Request[];
  request!: Request;
  username: string = "";
  password: string = "";

  constructor(
    private sys: SystemService,
    private reqSvc: RequestService,
    private userSvc: UserService
  ){}


  ngOnInit(): void {
    this.reqSvc.requestsInReview(this.sys.getLoggedInUserId()).subscribe({
      next: (res) => {
        console.debug("Requests in Review:", res);
        this.requests = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
