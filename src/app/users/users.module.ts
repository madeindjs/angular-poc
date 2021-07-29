import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersListComponent, UserCardComponent],
  imports: [CommonModule, HttpClientModule, UsersRoutingModule],
  exports: [UsersListComponent],
})
export class UsersModule {}
