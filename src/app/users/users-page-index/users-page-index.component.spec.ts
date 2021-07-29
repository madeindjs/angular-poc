import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageIndexComponent } from './users-page-index.component';

describe('UsersPageIndexComponent', () => {
  let component: UsersPageIndexComponent;
  let fixture: ComponentFixture<UsersPageIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPageIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPageIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
