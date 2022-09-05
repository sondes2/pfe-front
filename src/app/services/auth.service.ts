import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginInfo} from '../auth/login-info';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.serverURL + 'User/Access';
  constructor(private http: HttpClient) { }

  authenticateUser() {
    return this.http.post(this.url + '/login', {
      username: 'sondes11', password: 'sondes11'
    });
  }

  attemptAuth(credentials: LoginInfo): Observable<any> {
    return this.http.post(this.url + '/login', credentials, httpOptions);
  }
}
