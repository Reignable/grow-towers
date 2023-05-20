# 🥬🏢 GrowTowers

This is a project for UI which display a simulated vertical farm. The farm has two towers which each have 10 slots and each slot may or may not have an ongoing grow job.

Currently there is only the Tower Monitor application available.

## ⚒️ Technologies Used

- Production Dependencies
  - [Angular V16](https://angular.io/)
  - [RxJS](https://rxjs.dev/)
  - [PrimeNG Components](https://primeng.org/)
  - [Lodash](https://lodash.com/)
- Development Dependencies
  - [NX](https://nx.dev)
  - [Typescript](https://www.typescriptlang.org/)
  - [Jest](https://jestjs.io/)
  - [Testing Library Angular](https://testing-library.com/docs/angular-testing-library/intro/) and [User Event](https://testing-library.com/docs/user-event/intro)
  - [EsLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

## 🏃‍♂️Running

To get set up ensure you have [node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed on your system. This project was created using node v16.17.0 but any latest should also work.

Once those are available, install the dependencies.

```
$ npm i
```

The project uses [NX](https://nx.dev) for workspace management so it's helpful to have that installed globally.

```
$ npm i -g nx
```

After that you can use NX to serve the application on http://localhost:4200.

```
$ nx serve tower-monitor
```

Otherwise any of the nx cli commands can be used as normal.

## 🧪 Tests

There's a small Jest test suite for some of the components. Run this with

```
$ nx test slots
```

Tests are written using Testing Library Angular for rendering components and selecting elements, Testing Library User Event for user interaction, and Testing Library Jest DOM for DOM based assertions

## 🤔 Assumptions

From the data and code provided the user persona of a worker at a tower site was assumed. Someone who requires an overview of the current status of each tower but does not require finer grained detail on each job in each slot. This could be a lead research scientist if the towers are being used for a research project or a lead farmer if in a more commercial setting.

Following this no other assumptions were made.

## 🏗️ Structure

The simulated model provides a hierarchical structure to build on in Tower > Slot > Growth Tray > Growth Job which maps well to the routing of the application `/towers/:towerNumber/slots/:slotNumber`. This was the initial idea though having a route for each slot did not provide benefit without additional data to display so this was dropped.

The `towers` module is federated. This is because when entering the app this may not be the user's primary focus. The `slots` module is not federated as it's required when viewing a tower.

In a larger scale application this could be changed when there are more potential user personas and different types of task which could be completed.

## 🎣 Gotchas

The largest issue discovered is with the PrimeNG components and testing. The filter and sort components for the slots list couldn't be interacted with using Testing Library User Event and selectors.

Usually a dropdown item would be selected in a test using

```ts
userEvent.selectOptions(screen.getByRole('combobox', { name: /accessible label/i }), 'Some option')
```

With the Prime components in the test environment the necessary change event is not emitted by the component. A short search online indicates this is a common issue.

To test the functionality of the application the value was set on the form controls inside the component manually

```ts
fixture.componentInstance.formControl.setValue('Some option')
```

This works though is not ideal as the full connection between the UI component and the form control is uncovered and the event is not triggered from a user's perspective in an accessible way.

This was my first time using PrimeNG and finding this was disappointing as I thought it was a good usable library but this issue would probably steer me away in future.
