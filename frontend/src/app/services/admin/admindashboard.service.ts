import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  addCategoryAdminURL,
  addEmployeeUrl,
  addManufacturerAdminURL,
  addOfferUrl,
  addProductAdminURL,
  allCategoryAdminURL,
  allManufacturerAdminURL,
  allProductAdminURL,
  getAdminstockReqUrl,
  getAllEmployeeUrl,
  getAllOfferUrl,
  getNonNumericComponentsUrl,
  getNumericComponentsUrl,
  getOfferIncludedProductUrl,
  getSingleOfferUrl,
  rejectAdminstockUrl,
  resolveAdminstockUrl,
} from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class AdmindashboardService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(allProductAdminURL);
  }

  getAllCategory(): Observable<any> {
    return this.http.get(allCategoryAdminURL);
  }

  getAllMAnufacturer(): Observable<any> {
    return this.http.get(allManufacturerAdminURL);
  }
  addCategory(value: any): Observable<any> {
    return this.http.post(addCategoryAdminURL, value);
  }
  addManufacturer(value: any): Observable<any> {
    return this.http.post(addManufacturerAdminURL, value);
  }
  addNewProduct(val: any): Observable<any> {
    return this.http.post(addProductAdminURL, val);
  }

  //setting categories

  categories: any;
  setCategories(val: any) {
    this.categories = val;
  }
  getCategories() {
    return this.categories;
  }

  //for comparision add product
  getAllNumericComponents(): Observable<any> {
    return this.http.get(getNumericComponentsUrl);
  }
  getAllNonNumericComponents(): Observable<any> {
    return this.http.get(getNonNumericComponentsUrl);
  }

  //offer

  addOffer(data: any): Observable<any> {
    return this.http.post(addOfferUrl, data);
  }

  getAllOffer(): Observable<any> {
    return this.http.get(getAllOfferUrl);
  }

  //asmbl req
  getStockReq(): Observable<any> {
    return this.http.get(getAdminstockReqUrl);
  }
  resolveStockReq(id: any, data: any): Observable<any> {
    return this.http.put(resolveAdminstockUrl + id, data);
  }
  rejectStockReq(id: any): Observable<any> {
    return this.http.put(rejectAdminstockUrl + id, null);
  }

  //add employee
  addEmployee(data: any): Observable<any> {
    return this.http.post(addEmployeeUrl, data);
  }
  getEmployee(): Observable<any> {
    return this.http.get(getAllEmployeeUrl);
  }
}
