import { Component } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class'

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {

  pageTitle = "Request Detail";
  showVerifyRemove: boolean = false;
  request!: Request;

  constructor(
    private sys: SystemService,
    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  remove(): void {
    this.showVerifyRemove = !this.showVerifyRemove;
  }

  removeVerified(): void {
    this.reqSvc.remove(this.request.id).subscribe({
      next: (res) => {
        console.debug("Request Removed");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"]);
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
