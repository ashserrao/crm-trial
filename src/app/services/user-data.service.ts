import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  baseUrl: string = 'http://localhost:3000/Users';

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<any> {
    return this._http.get<any>(this.baseUrl);
  }

  getUserByUsername(username: any): Observable<any> {
    return this._http.get<any>(this.baseUrl + '?username=' + username);
  }

  // http://localhost:3000/Users
}
