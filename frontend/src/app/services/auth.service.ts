import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginUrl, logoutUrl } from '../config/api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(val: any): Observable<any> {
    return this.http.post(loginUrl, val, httpOptions);
  }
  logout(): Observable<any> {
    return this.http.put(logoutUrl, '');
  }
  //test connection
  getUserBoard(): Observable<any> {
    return this.http.get(loginUrl + '/admin', { responseType: 'text' });
  }
}
