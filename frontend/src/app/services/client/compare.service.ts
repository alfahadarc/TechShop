import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  getClienProductComponentsUrl,
  getClientSingleProductUrl,
} from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class CompareService {
  constructor(private http: HttpClient) {}

  //for compare bucket
  private dataSource: BehaviorSubject<any> = new BehaviorSubject<any>('0');
  data: Observable<any> = this.dataSource.asObservable();
  sendData(data: any) {
    this.dataSource.next(data);
  }
  //for show difference
  private toggleSource: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  toggle: Observable<any> = this.toggleSource.asObservable();
  sendToggle(val: any) {
    this.toggleSource.next(val);
  }

  //get data
  getSingleProduct(id: any): Observable<any> {
    return this.http.get(getClientSingleProductUrl + id);
  }
  getProductComponets(id: any): Observable<any> {
    return this.http.get(getClienProductComponentsUrl + id);
  }
}
