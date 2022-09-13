import {Injectable} from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: string;

  constructor() {
  }

  // tslint:disable-next-line:typedef
  signOut() {
    window.sessionStorage.clear();
  }

  // tslint:disable-next-line:typedef
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY) as string;
  }

  // tslint:disable-next-line:typedef
  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    console.log(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY) as string;
  }

  // tslint:disable-next-line:typedef
  public saveAuthorities(authorities: string) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string {
    this.roles = '';

    if (sessionStorage.getItem(TOKEN_KEY)) {
      this.roles = JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY) as string);
    }

    return this.roles;
  }
}
