import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageModule } from './about-page/about-page.module';
import { AboutPageComponent } from './about-page/about-page/about-page.component';
import { HomePageModule } from './home-page/home-page.module';
import { HomePageComponent } from './home-page/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule, AboutPageModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
