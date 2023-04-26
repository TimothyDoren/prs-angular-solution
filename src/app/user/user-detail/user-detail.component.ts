import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  pageTitle = "User Detail";
  showVerifyRemove: boolean = false;
  user!: User;

  constructor(
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  remove(): void {
    this.showVerifyRemove = !this.showVerifyRemove;
  }

  removeVerified(): void {
    this.userSvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug("User Removed");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params["id"]);
    this.userSvc.get(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
