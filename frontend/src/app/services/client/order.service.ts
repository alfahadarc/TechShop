import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  addOrderURl,
  cancelOrderUrl,
  confirmOrderPaymentUrl,
  getAllDistrictUrl,
  getAllOrderUrl,
  getAllSubDistricUrl,
  getOrderItemsUrl,
  getSingleOrderUrl,
} from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getAllDistrict(): Observable<any> {
    return this.http.get(getAllDistrictUrl);
  }
  getAllSubDistrict(id: any): Observable<any> {
    return this.http.get(getAllSubDistricUrl + id);
  }

  addOrder(data: any): Observable<any> {
    return this.http.post(addOrderURl, data);
  }

  confirmPayment(data: any): Observable<any> {
    return this.http.post(confirmOrderPaymentUrl, data);
  }

  cancelOrder(id: any): Observable<any> {
    return this.http.delete(cancelOrderUrl + id);
  }

  getSingleOrder(id: any): Observable<any> {
    return this.http.get(getSingleOrderUrl + id);
  }

  getAllOrder(): Observable<any> {
    return this.http.get(getAllOrderUrl);
  }

  getOrderItems(id: any): Observable<any> {
    return this.http.get(getOrderItemsUrl + id);
  }
}
