import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  addOffertoCartUrl,
  addProductToCartUrl,
  deleteFromCartUrl,
  getCartProductsUrl,
  getOfferCartQuantityUrl,
  getProductCartQuantityUrl,
} from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  private cartSource: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  cartValue: Observable<any> = this.cartSource.asObservable();
  increasecartValue(val: any) {
    this.cartSource.next(val);
  }

  addToCart(productID: any, quantity: any): Observable<any> {
    return this.http.put(addProductToCartUrl, { productID, quantity });
  }
  getProductCartQuantity(productID: any): Observable<any> {
    return this.http.get(getProductCartQuantityUrl + productID);
  }
  getCartProduct(): Observable<any> {
    return this.http.get(getCartProductsUrl);
  }
  deleteFromCart(id: any): Observable<any> {
    return this.http.delete(deleteFromCartUrl + id);
  }
  addOfferToCart(data: any): Observable<any> {
    return this.http.put(addOffertoCartUrl, data);
  }
  getOfferQuantity(id: any): Observable<any> {
    return this.http.get(getOfferCartQuantityUrl + id);
  }
}
