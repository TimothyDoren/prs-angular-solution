import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User | null = null;

  constructor(
    private router: Router
  ) { }

  checkLogin(): void {
    if(this.loggedInUser === null){
      this.router.navigateByUrl("/user/login");
    }
  }

  getLoggedInUserId(): number {
    return this.loggedInUser ? this.loggedInUser.id : 0;
  }
}
