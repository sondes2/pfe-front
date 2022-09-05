import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.serverURL + 'User/';
  constructor(private http: HttpClient) { }

  findUserByLogin() {
    const username = sessionStorage.getItem('AuthUsername');
    return this.http.get(this.url + 'findUserBylogin/' + username);
  }
}
