import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrls: ['./vendor-change.component.css']
})
export class VendorChangeComponent {

  vendor!: Vendor;
  pageTitle = "Vendor Change"

  constructor(
    private venSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  save(){
    this.venSvc.change(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor Changed!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void{
    let id = this.route.snapshot.params["id"];
    this.venSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vendor = res;
      }, 
      error: (err) => {
        console.error(err);
      }
    })
  }

}
