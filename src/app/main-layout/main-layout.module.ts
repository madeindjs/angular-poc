import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent, MainLayoutComponent],
  exports: [MainLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class MainLayoutModule {}
