import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent {
  public email = '';
  public password = '';
  public passwordMinLength = 4;

  constructor(private readonly loginService: LoginService) {}

  login() {
    this.loginService.login({ email: this.email, password: this.password });
  }
}
