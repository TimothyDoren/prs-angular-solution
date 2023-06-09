import { Component } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {

  pageTitle: string = "Vendor List";
  vendors: Vendor[] = [];

  constructor(
    private sys: SystemService,
    private venSvc: VendorService
  ){}

  ngOnInit(): void {
    this.sys.checkLogin();
    if(this.sys.loggedInUser !== null){
      console.log("Someone is Logged in");
    } else {
      console.log("No one is Logged in");
    }
    this.venSvc.list().subscribe({
      next: (res) => {
        console.debug("Employees: ", res);
        this.vendors = res;
      }, 
      error: (err) => {
        console.error(err);
      }
    })
  }
}
