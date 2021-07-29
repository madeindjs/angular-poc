import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from 'src/app/state.interface';
import { User, UsersService } from '../../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public users: Observable<User[]>;

  constructor(
    private readonly usersService: UsersService,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().pipe(take(1)).subscribe();

    this.users = this.store.select((state) => state.users.users);
  }
}
