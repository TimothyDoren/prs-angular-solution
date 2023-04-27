import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class'

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
  request: Request = new Request();
  users!: User[];
  pageTitle = "Request Create";

  constructor(
    private reqSvc: RequestService,
    private userSvc: UserService,
    private router: Router
  ){ }

  save(): void{
    this.request.userId = Number(this.request.userId);
    this.reqSvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request:", res);
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
        console.debug("User:", res);
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
