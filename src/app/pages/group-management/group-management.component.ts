import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {GroupServiceService} from '../../services/group-service.service';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit {
  userList: User[] = [];
  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.findUsersOfSameGroupByUserId();
  }

  findUsersOfSameGroupByUserId() {
    const login = window.sessionStorage.getItem('AuthUsername');
    this.userService.findUsersOfSameGroupByUserId(login).subscribe({
      next: (value: User[]) => {
        this.userList = value;
        console.log(value, this.userList);
      }, error: err => console.log(err)
    });
  }

}
