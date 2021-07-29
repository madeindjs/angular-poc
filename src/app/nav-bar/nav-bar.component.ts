// src/app/nav-bar/nav-bar.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public usersCount: Observable<number>;

  constructor(private readonly store: Store<{ users: User[] }>) {}

  ngOnInit(): void {
    this.usersCount = this.store
      .select('users')
      .pipe(map((users) => users.length));
  }
}
