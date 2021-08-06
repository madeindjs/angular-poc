import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersPageIndexComponent } from './users-page-index/users-page-index.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserNamePipe } from '../user-name.pipe';

@NgModule({
  declarations: [
    UsersListComponent,
    UserCardComponent,
    UsersPageIndexComponent,
    UserNamePipe,
  ],
  imports: [CommonModule, HttpClientModule, UsersRoutingModule],
  exports: [UsersListComponent],
})
export class UsersModule {}
