import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LoginGuard } from './login.guard';
import { AppState } from './state.interface';

describe('LoginGuard', () => {
  let guard: LoginGuard;
  const initialState: AppState = {
    login: { user: undefined },
    users: { users: [] },
  };

  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });
    guard = TestBed.inject(LoginGuard);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow when user is connected', async () => {
    store.setState({
      ...initialState,
      login: { user: { email: 'test@test.fr', password: '123456' } },
    } as AppState);

    // expect(guard.canActivate()).toBeObservable(cold('(a|)', { a: true }));

    const result = await guard.canActivate().toPromise();
    expect(result).toBeTrue();

    // guard.canActivate().subscribe(
    //   (result) => {
    //     expect(result).toBeTrue();
    //   },
    //   (error) => {
    //     throw error;
    //   },
    //   () => done()
    // );
  });

  // describe('when user is not connected', () => {
  //   let guard: LoginGuard;
  //   const initialState: AppState = {
  //     login: { user: undefined },
  //     users: { users: [] },
  //   };

  //   let store: MockStore;

  //   beforeEach(() => {
  //     TestBed.configureTestingModule({
  //       providers: [provideMockStore({ initialState })],
  //     });
  //     guard = TestBed.inject(LoginGuard);
  //     store = TestBed.inject(MockStore);
  //   });

  //   it('should be created', () => {
  //     expect(guard).toBeTruthy();
  //   });

  //   it('should not allow', (done) => {
  //      const expected = cold('(a|)', { a: false });
  //     guard.canActivate(undefined, undefined).subscribe(
  //       (result) => {
  //         expect(result).toBeFalse();
  //       },
  //       (error) => {
  //         throw error;
  //       },
  //       () => done()
  //     );
  //   });
  // });
});
