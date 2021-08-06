import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    // StoreModule.forFeature('login', { login: loginReducer }),
  ],
  exports: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule {}
