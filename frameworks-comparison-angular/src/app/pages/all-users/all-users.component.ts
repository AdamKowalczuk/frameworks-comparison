import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/userService';
import { IUser } from '../../../types/index';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  users: IUser[] = [];
  isUsersLoading: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isUsersLoading = true;
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response.users;

        this.isUsersLoading = false;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.isUsersLoading = false;
      }
    );
  }
}
