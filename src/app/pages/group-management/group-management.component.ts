import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {GroupServiceService} from "../../services/group-service.service";

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.scss']
})
export class GroupManagementComponent implements OnInit {
  userList: User[] = [];
  constructor( private userService: UserService, private groupService: GroupServiceService) { }

  ngOnInit(): void {

  }

  findUsersOfSameGroupByUserId(idGroup: number) {
    this.userService.findUsersOfSameGroupByUserId(idGroup).subscribe({
      next: (value: User[]) => this.userList = value, error: err => console.log(err)
    });
  }

}
