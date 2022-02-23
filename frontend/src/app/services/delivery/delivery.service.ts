import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { changeCurrentSubDistrictUrl, getDeliverymanOrderUrl, getSubDistrictUrl, markAsDeliveredUrl, takeDeliveryUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private http: HttpClient) {}

  getAllOrder(): Observable<any> {
    return this.http.get(getDeliverymanOrderUrl);
  }
  getSubDistrict(id:any):Observable<any>{
    return this.http.get(getSubDistrictUrl+id);
  }
  takeDelivery(id:any):Observable<any>{
    return this.http.post(takeDeliveryUrl+id,{});
  }
  changeCurrentSubDistrict(body:any):Observable<any>{
    return this.http.put(changeCurrentSubDistrictUrl,body);
  }
  markAsDelivered(id:any):Observable<any>{
    return this.http.put(markAsDeliveredUrl+id,{});
  }
}
