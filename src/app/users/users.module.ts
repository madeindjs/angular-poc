import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [UsersListComponent, UserCardComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [UsersListComponent],
})
export class UsersModule {}
