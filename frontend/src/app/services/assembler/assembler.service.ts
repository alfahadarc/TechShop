import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  addAsmblStockReqUrl,
  asmblrAssembleUrl,
  getasmblOrderitemsUrl,
  getasmblrPendingOrderUrl,
  getAsmblSingleProductstockReqUrl,
} from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class AssemblerService {
  constructor(private http: HttpClient) {}

  getPendingOrder(): Observable<any> {
    return this.http.get(getasmblrPendingOrderUrl);
  }

  doAssemble(id: any): Observable<any> {
    return this.http.post(asmblrAssembleUrl + id, null);
  }

  addStockReq(data: any): Observable<any> {
    return this.http.post(addAsmblStockReqUrl, data);
  }
  getSingleProductStockReq(id: any): Observable<any> {
    return this.http.get(getAsmblSingleProductstockReqUrl + id);
  }
  getOrderItems(id: any): Observable<any> {
    return this.http.get(getasmblOrderitemsUrl + id);
  }
}
