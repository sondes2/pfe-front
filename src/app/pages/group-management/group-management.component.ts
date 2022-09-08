import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit {
  userList: User[] = [];
  allUsers: User[] = [];
  constructor( private userService: UserService) { }

  ngOnInit(): void {

  }
  getUserByGroup(idGroup: number) {
    this.userService.getUsersByGroup(idGroup).subscribe({
      next: value => this.userList = value, error: err => console.log(err)
    });
  }

}
