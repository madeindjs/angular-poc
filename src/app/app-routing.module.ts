import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageModule } from './about-page/about-page.module';
import { AboutPageComponent } from './about-page/about-page/about-page.component';
import { HomePageModule } from './home-page/home-page.module';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { MainLayoutComponent } from './main-layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainLayoutModule,
    HomePageModule,
    AboutPageModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
