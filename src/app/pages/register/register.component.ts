import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Role} from '../../models/role';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

class MatDialogRef<T> {
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  user: User ;

  constructor(public matdialogref: MatDialogRef<RegisterComponent>, private us: UserService) {
  }

  ngOnInit(): void {
    if (this.us.idUser !== 0) {
      console.log(this.us.idUser);
      this.us.getUserById(this.us.idUser).subscribe(user1 => {
        this.user = user1;
        console.log(this.user);

      });

    }
  }

  // tslint:disable-next-line:typedef
  onsubmit(f: NgForm) {
    console.log(f.value);
      this.user.firstName = f.value.firstName;
      this.user.lastName = f.value.lastName;
      this.user.idUser = f.value.iduser;
      this.user.telNum = f.value.telNum;
      this.user.password = f.value.password;
      this.user.role = f.value.gender;
      this.user.login = f.value.login;
      this.user.address = f.value.address;
      this.user.mail = f.value.mail;
      this.us.updateUser(this.user).subscribe(data => console.log(data));
  }
}
