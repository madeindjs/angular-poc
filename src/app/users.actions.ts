// src/app/users.actions.ts (git)
import { createAction, props } from '@ngrx/store';
import { User } from './users.service';

export const setUsersAction = createAction(
  'setUsersAction',
  props<{ users: User[] }>()
);
