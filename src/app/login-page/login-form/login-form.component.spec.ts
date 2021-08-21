//src/app/login-page/login-form/login-form.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { LoginService } from 'src/app/login/login.service';
import { AppState } from 'src/app/state.interface';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let instance: LoginFormComponent;

  const initialState: AppState = {
    login: { user: undefined },
    users: { users: [] },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      providers: [LoginService, provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    instance = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('validity', () => {
    it('should accept form', () => {
      instance.emailField.setValue('toto@toto.fr');
      instance.passwordField.setValue('tototo');
      expect(instance.form.valid).toBeTrue();
    });

    it('should reject form (email is not valid)', () => {
      instance.emailField.setValue('toto');
      instance.passwordField.setValue('tototo');
      expect(instance.form.valid).toBeFalse();
    });

    it('should reject form (password is too short)', () => {
      instance.emailField.setValue('toto@toto.fr');
      instance.passwordField.setValue('to');
      expect(instance.form.valid).toBeFalse();
    });
  });
});
