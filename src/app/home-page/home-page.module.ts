import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersModule } from '../users/users.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, UsersModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
