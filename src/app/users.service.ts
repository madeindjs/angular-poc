import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export interface User {
  uuid: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  public getUsers() {
    return this.http
      .get<{ data: User[] }>('https://fakerapi.it/api/v1/users')
      .pipe(map((res) => res.data));
  }
}
