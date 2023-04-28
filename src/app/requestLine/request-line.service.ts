import { Injectable } from '@angular/core';
import { RequestLine } from './requestLine.class'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {


  baseurl: string = "http://localhost:5000/api/requestlines";
  requestlines!: RequestLine[];

  constructor(
    private http: HttpClient
  ){}

  list(): Observable<RequestLine[]> {
    return this.http.get(`${this.baseurl}`) as Observable<RequestLine[]>
  }
  get(id: number): Observable<RequestLine> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<RequestLine>
  }
  create(reqL: RequestLine): Observable<RequestLine> {
    return this.http.post(`${this.baseurl}`, reqL) as Observable<RequestLine>
  }
  change(reqL: RequestLine): Observable<any> {
    return this.http.put(`${this.baseurl}/${reqL.id}`, reqL) as Observable<any>
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
  }
}
