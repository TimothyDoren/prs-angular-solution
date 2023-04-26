import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {
  vendor: Vendor = new Vendor();
  pageTitle = "Vendor Create";

  constructor(
    private venSvc: VendorService,
    private router: Router
  ){}

  save(): void {
    this.venSvc.create(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor Created!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
    
  }
}
