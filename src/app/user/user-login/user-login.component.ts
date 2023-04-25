import { Component } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  pageTitle = "User Login";
  username: string = "";
  password: string = "";
  message: string = "";

  constructor(
    private sys: SystemService,
    private userSvc: UserService,
    private router: Router
  ){}

  login(): void {
    this.userSvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug("Login Successful!");
        this.sys.loggedInUser = res;
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.sys.loggedInUser = null;
  }
}
