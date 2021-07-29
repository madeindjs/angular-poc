// src/app/users.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { setUsersAction } from './users.actions';
import { User } from './users.service';

export const initialState: User[] = [];

const _usersReducer = createReducer(
  initialState,
  on(setUsersAction, (state, payload) => payload.users)
);

export function usersReducer(state, action) {
  return _usersReducer(state, action);
}
