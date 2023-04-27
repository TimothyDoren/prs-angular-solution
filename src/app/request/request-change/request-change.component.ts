import { Component } from '@angular/core';
import { Request } from '../request.class'
import { User } from 'src/app/user/user.class';
import { RequestService } from '../request.service';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.component.html',
  styleUrls: ['./request-change.component.css']
})
export class RequestChangeComponent {

  request: Request = new Request();
  users!: User[];
  pageTitle = "Request Change";

  constructor(
    private reqSvc: RequestService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  save(): void {
    this.request.userId = +this.request.userId;
    console.debug("B4:", this.request);
    this.reqSvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request Changed!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  
  ngOnInit(): void {
    this.userSvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
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
