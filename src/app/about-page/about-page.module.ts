import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [AboutPageComponent],
  exports: [AboutPageComponent],
  imports: [CommonModule],
})
export class AboutPageModule {}
