import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Role} from '../models/role';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  optionRequete = { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*' }) };
  getUserByGroupURL: string;
  get idUser(): number {
    return this.idUser;
  }

  set idUser(value: number) {
    this.idUser = value;
  }

  url = environment.serverURL + 'User/';
  constructor(private http: HttpClient) {
    this.getUserByGroupURL = 'http://localhost:8085/User/findByGroupe/';
  }

  findUserByLogin() {
    const username = sessionStorage.getItem('AuthUsername');
    return this.http.get(this.url + 'findUserBylogin/' + username);
  }
  getUserById(id: number) {
    return this.http.get<User>(this.url + 'userbyid/' + id);
}

  updateUser(user: User) {
    return this.http.put(this.url + 'UpdateUser', user);
  }

  getAllRole() {
    return this.http.get<Role[]>('http://localhost:8085/Role/findall');
  }
  getUsersByGroup(idUser: number): Observable<any[]> {
    return this.http.get<any[]>(this.getUserByGroupURL + idUser);
  }
}
