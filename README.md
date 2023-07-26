# NucleusWorkspace

State management in Angular

Angular Workspace with one application and one library.
Contains low-level task component in the lib and smart task-list component in the app and data managment with a data store wrapping a rsjx service that gets (mock REST API) data from json-server.

Inspired by:
https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Mock REST API

https://moduscreate.com/blog/how-to-mock-data-in-angular-applications/

>json-server --watch C:/dev/tools/json_server/tasks.json --port 3000

Monitor data on: http://localhost:3000/tasks

{
  "tasks": [
    {
      "id": "a4ea2d6b-7d1d-4742-b58c-d2f919a0523e",
      "title": "AAA",
      "isCompleted": false
    },
    {
      "id": "26d557f5-80e8-4957-9cf4-8e136a609f5b",
      "title": "BBB",
      "isCompleted": true
    },
    {
      "id": "c1c3faf9-341b-4871-8923-0e55aca85a5c",
      "title": "CCC",
      "isCompleted": true
    },
    {
      "id": "50f7e2d5-9cd2-425c-a451-be8421343f32",
      "title": "DDD",
      "isCompleted": true
    },
    {
      "id": "50abf538-5b53-45e9-b85f-dfb5e2ba254e",
      "title": "EEE",
      "isCompleted": false
    }
  ]
}