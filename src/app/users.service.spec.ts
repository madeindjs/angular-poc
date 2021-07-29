import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User, UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UsersService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected users', (done) => {
    const expectedUsers: User[] = [
      {
        email: 'toto@toto.fr',
        firstname: 'toto',
        lastname: 'toto',
        username: 'toto',
        uuid: 'toto',
      },
    ];

    service.getUsers().subscribe((users) => {
      console.log(users);
      expect(users).toEqual(expectedUsers);
      done();
    });

    const req = httpTestingController.expectOne(
      'https://fakerapi.it/api/v1/users'
    );

    req.flush(expectedUsers);
  });
});
