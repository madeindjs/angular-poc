![Test status](https://github.com/madeindjs/angular-poc/actions/workflows/main.yml/badge.svg)

# Angular POC

This is my personal tests with Angular:

- [x] guard
- [x] modules
- [x] lazy loading
- [x] tests
- [x] Github Actions CI
- [x] interceptors
- [x] ngrx

## Development server

Run `ng serve` for a dev server. Navigate to <http://localhost:4200/>. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Docker

Build image

```sh
docker build -t angular-poc:latest .
```

Then run it

```sh
docker run -p 80:80 angular-poc
```

## Test

```sh
npm run test # using karma
npm run e2e # protractor
```
