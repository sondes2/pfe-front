import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {LoginInfo} from '../../auth/login-info';
import {VerifAuthService} from '../../services/verif-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles = '';
  private loginInfo: LoginInfo = new LoginInfo('', '');
  hide = true;

  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private verifauth: VerifAuthService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.loginInfo = new LoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.role);
        this.isLoginFailed = false;
        this.isLoggedIn = false;
        this.roles = this.tokenStorage.getAuthorities();
        this.verifauth.verif = true;

        for (const role of this.roles) {
          if (role === 'Admin') {
            this.verifauth.verifrole = true;
          }
        }

        this.router.navigate(['']);
      }, error: error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    });
  }
}
