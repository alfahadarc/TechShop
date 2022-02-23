import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  getClienProductComponentsUrl,
  getManufacturerImageUrl,
  getOfferIncludedProductUrl,
  getProductMainImageUrl,
  getSingleOfferUrl,
  getSingleProductURl,
  updateCategoryUrl,
  updateManufacturerImageUrl,
  updateManufacturerUrl,
  updateOnlyOfferUrl,
  updateProductMainImageUrl,
  updateProductUrl,
  updateOfferProductUrl,
  updateOfferFreeProductUrl,
  deleteOfferProductUrl,
  deleteOfferFreeProductUrl,
  addOfferProductUrl,
  addOfferFreeProductUrl,
  getOfferMainImageUrl,
  uploadOfferImageUrl,
  updateVideoProductUrl,
  getTutorialVideoUrl,
} from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class EditserviceService {
  constructor(private http: HttpClient) {}

  product: any;
  setProduct(val: any) {
    this.product = val;
  }
  getProduct() {
    return this.product;
  }

  category: any;
  setCategory(val: any) {
    this.category = val;
  }
  getCategory() {
    return this.category;
  }

  manufacturer: any;
  setManufacturer(val: any) {
    this.manufacturer = val;
  }
  getManufacturer() {
    return this.manufacturer;
  }

  //updates category
  updateCategory(val: any): Observable<any> {
    return this.http.put(updateCategoryUrl, val);
  }

  //update manufacturer
  updateManufacturer(val: any): Observable<any> {
    return this.http.put(updateManufacturerUrl, val);
  }
  //get manufacturer photo
  getManufacturerPhoto(id: any): Observable<any> {
    return this.http.get(getManufacturerImageUrl + id, {
      responseType: 'blob',
    });
  }
  //send manufacturer image
  sendManufacturerImage(data: any, id: any): Observable<any> {
    return this.http.post(updateManufacturerImageUrl + id, data);
  }
  //product update
  getSingleProduct(id: any): Observable<any> {
    return this.http.get(getSingleProductURl + id);
  }
  updateProduct(val: any): Observable<any> {
    return this.http.put(updateProductUrl, val);
  }
  getProductMainImage(id: any): Observable<any> {
    return this.http.get(getProductMainImageUrl + id, {
      responseType: 'blob',
    });
  }
  sendProductMainImage(data: any, id: any): Observable<any> {
    return this.http.post(updateProductMainImageUrl + id, data);
  }
  getProductComponets(id: any): Observable<any> {
    return this.http.get(getClienProductComponentsUrl + id);
  }
  getSingleOffer(id: any): Observable<any> {
    return this.http.get(getSingleOfferUrl + id);
  }

  getOfferIncludedProduct(id: any): Observable<any> {
    return this.http.get(getOfferIncludedProductUrl + id);
  }

  updateOnlyOffer(data: any): Observable<any> {
    return this.http.put(updateOnlyOfferUrl, data);
  }

  updateOfferProduct(data: any): Observable<any> {
    return this.http.put(updateOfferProductUrl, data);
  }

  deleteOfferProduct(offerID: any, productID: any): Observable<any> {
    return this.http.delete(
      deleteOfferProductUrl + 'offerID=' + offerID + '&productID=' + productID
    );
  }

  updateOfferFreeProduct(data: any): Observable<any> {
    return this.http.put(updateOfferFreeProductUrl, data);
  }
  deleteOfferFreeProduct(offerID: any, productID: any): Observable<any> {
    return this.http.delete(
      deleteOfferFreeProductUrl +
        'offerID=' +
        offerID +
        '&productID=' +
        productID
    );
  }

  addOfferProduct(data: any): Observable<any> {
    return this.http.post(addOfferProductUrl, data);
  }

  addOfferFreeProduct(data: any): Observable<any> {
    return this.http.post(addOfferFreeProductUrl, data);
  }

  getOfferMainImage(id: any): Observable<any> {
    return this.http.get(getOfferMainImageUrl + id, {
      responseType: 'blob',
    });
  }

  uploadOfferMainImage(id: any, fd: any): Observable<any> {
    return this.http.post(uploadOfferImageUrl + id, fd);
  }
  uploadVideo(id: any, fd: any): Observable<any> {
    return this.http.post(updateVideoProductUrl + id, fd);
  }
  getTutorialVideo(id: any): Observable<any> {
    return this.http.get(getTutorialVideoUrl + id, {
      responseType: 'blob',
    });
  }
}
