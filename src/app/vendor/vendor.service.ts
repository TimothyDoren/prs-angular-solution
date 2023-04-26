import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendor } from './vendor.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  baseurl: string = "http://localhost:5000/api/vendors";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Vendor[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }
  create(ven: Vendor): Observable<Vendor> {
    return this.http.post(`${this.baseurl}`, ven) as Observable<Vendor>;
  }
  change(ven: Vendor): Observable<any> {
    return this.http.put(`${this.baseurl}/${ven.id}`, ven) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
