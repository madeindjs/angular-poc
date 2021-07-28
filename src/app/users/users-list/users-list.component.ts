import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { User, UsersService } from '../../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public users: User[];

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService
      .getUsers()
      .pipe(take(1))
      .subscribe((users) => (this.users = users));
  }
}
