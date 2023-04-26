import { Component } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {

  pageTitle: string = "Vendor List";
  vendors: Vendor[] = [];

  constructor(
    private venSvc: VendorService
  ){}

  ngOnInit(): void {
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
