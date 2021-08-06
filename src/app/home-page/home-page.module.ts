import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from '../login/login.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, LoginModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
